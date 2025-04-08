import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const patientApi = createApi({
  reducerPath: "patientApi",
  baseQuery: fetchBaseQuery({  baseUrl: "https://pms-sblc.onrender.com/api/v1" }),
  keepUnusedDataFor: 30,
  tagTypes: ["PatientData"],
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: (params) => ({
        url: "/AllRecords",
        params: {
          keyword: params?.keyword
        }
      }),
      providesTags: ["PatientData"], 
    }),
    getPatientDetails: builder.query({
      query: (id) => `/patient/${id}`,
      providesTags: (result, error, id) => [{ type: "PatientData", id }],
    }),
    createPatientData: builder.mutation({
      query(body) {
        return {
          url: "/SubmitData",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "PatientData" }],
    }),
    updatePatient: builder.mutation({
      query({id , body}){
        return {
          url: `/patient/${id}`,
          method: "PUT",
          body,
        }
      },
      invalidatesTags: [{ type: "PatientData" }], 
    }),
    deletePatient: builder.mutation({
      query(id) {
        return {
          url: `/patient/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: [{ type: "PatientData" }], 
    })
  }),
});

export const {
  useGetPatientsQuery,
  useGetPatientDetailsQuery,
  useCreatePatientDataMutation,
  useUpdatePatientMutation,
  useDeletePatientMutation
} = patientApi;
