import { axiosInstance } from "./http";

export async function meetingRoomUsedCount(startTime: string, endTime: string) {
  return await axiosInstance.get('/statistic/meetingRoomUsedCount', {
      params: {
          startTime,
          endTime
      }
  });
}

export async function userBookingCount(startTime: string, endTime: string) {
  return await axiosInstance.get('/statistic/userBookingCount', {
      params: {
          startTime,
          endTime
      }
  });
}
