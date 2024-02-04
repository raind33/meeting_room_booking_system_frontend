import dayjs from 'dayjs';
import { axiosInstance } from "./http";
import { SearchBooking } from '@/page/bookingManage/BookingManage';
import { CreateBooking } from '@/page/meeting_room_list/CreateBookingModal';

export async function bookingList(searchBooking: SearchBooking, pageNo: number, pageSize: number) {

  let bookingTimeRangeStart;
  let bookingTimeRangeEnd;
  
  if(searchBooking.rangeStartDate && searchBooking.rangeStartTime) {
      const rangeStartDateStr = dayjs(searchBooking.rangeStartDate).format('YYYY-MM-DD');
      const rangeStartTimeStr = dayjs(searchBooking.rangeStartTime).format('HH:mm');
      bookingTimeRangeStart = dayjs(rangeStartDateStr + ' ' + rangeStartTimeStr).valueOf()
  }

  if(searchBooking.rangeEndDate && searchBooking.rangeEndTime) {
      const rangeEndDateStr = dayjs(searchBooking.rangeEndDate).format('YYYY-MM-DD');
      const rangeEndTimeStr = dayjs(searchBooking.rangeEndTime).format('HH:mm');
      bookingTimeRangeEnd = dayjs(rangeEndDateStr + ' ' + rangeEndTimeStr).valueOf()
  }
  console.log(typeof bookingTimeRangeStart);
  return await axiosInstance.get('/booking/list', {
      params: {
          username: searchBooking.username,
          meetingRoomName: searchBooking.meetingRoomName,
          meetingRoomPosition: searchBooking.meetingRoomPosition,
          bookingTimeRangeStart,
          bookingTimeRangeEnd,
          pageNo: pageNo,
          pageSize: pageSize
      }
  });
}

export async function apply(id: number) {
  return await axiosInstance.get('/booking/apply/' + id);
}

export async function reject(id: number) {
  return await axiosInstance.get('/booking/reject/' + id);
}

export async function unbind(id: number) {
  return await axiosInstance.get('/booking/unbind/' + id);
}
export async function bookingAdd(booking: CreateBooking) {
  const rangeStartDateStr = dayjs(booking.rangeStartDate).format('YYYY-MM-DD');
  const rangeStartTimeStr = dayjs(booking.rangeStartTime).format('HH:mm');
  const startTime = dayjs(rangeStartDateStr + ' ' + rangeStartTimeStr).valueOf()

  const rangeEndDateStr = dayjs(booking.rangeEndDate).format('YYYY-MM-DD');
  const rangeEndTimeStr = dayjs(booking.rangeEndTime).format('HH:mm');
  const endTime = dayjs(rangeEndDateStr + ' ' + rangeEndTimeStr).valueOf()

  return await axiosInstance.post('/booking/add', {
      meetingRoomId: booking.meetingRoomId,
      startTime,
      endTime,
      note: booking.note            
  });
}

