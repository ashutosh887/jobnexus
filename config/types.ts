interface JobInterface {
  employer_name: string;
  employer_logo: string;
  employer_website: string | null;
  employer_company_type: string | null;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  apply_options: any; // You can replace 'any' with a more specific type if needed
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits: string[] | null;
  job_google_link: string;
  job_offer_expiration_datetime_utc: string;
  job_offer_expiration_timestamp: number;
  job_required_experience: string[]; // You can replace 'string' with a more specific type if needed
  job_required_skills: string[]; // You can replace 'string' with a more specific type if needed
  job_required_education: string[]; // You can replace 'string' with a more specific type if needed
  job_experience_in_place_of_education: boolean;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_salary_currency: string | null;
  job_salary_period: string | null;
  job_highlights: string[]; // You can replace 'string' with a more specific type if needed
  job_job_title: string;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
}

interface UsePaginatedFetchType {
  data: JobInterface[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  nextPage: () => void;
  prevPage: () => void;
  page: number;
}
