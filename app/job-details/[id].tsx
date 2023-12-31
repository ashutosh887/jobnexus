import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { COLORS, SIZES, icons } from "../../config";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";
import Company from "../../components/jobdetails/Company";
import JobTabs from "../../components/jobdetails/JobTabs";
import Specifics from "../../components/jobdetails/Specifics";
import JobAbout from "../../components/jobdetails/JobAbout";
import JobFooter from "../../components/jobdetails/JobFooter";
import * as Clipboard from "expo-clipboard";
import useFetch from "../../hooks/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [refreshing, setRefreshing] = useState(false);

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const onRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params?.id,
  });

  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            // @ts-ignore
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            // @ts-ignore
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => {
            return (
              <ScreenHeaderBtn
                icon={icons.left}
                dimension="60%"
                handlePress={async () => router.back()}
              />
            );
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn
                icon={icons.share}
                dimension="60%"
                handlePress={() => {
                  Clipboard.setStringAsync(data[0]?.job_google_link);
                  ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
                }}
              />
            );
          },
          animation: "slide_from_right",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
