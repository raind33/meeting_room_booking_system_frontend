import { CreateMeetingRoom } from "../page/meetingRoomManage/CreateMeetingRoomModal";
import { UpdateMeetingRoom } from '../page/meetingRoomManage/UpdateMeetingRoom';
import { axiosInstance } from "./http";

export async function meetingRoomList(name: string, capacity: number, equipment: string, pageNo: number, pageSize: number) {
  return await axiosInstance.get('/meeting-room/list', {
      params: {
          name,
          capacity,
          equipment,
          pageNo,
          pageSize
      }
  });
}
export async function deleteMeetingRoom(id: number) {
  return await axiosInstance.delete('/meeting-room/' + id);
}

export async function createMeetingRoom(meetingRoom: CreateMeetingRoom) {
  return await axiosInstance.post('/meeting-room/create', meetingRoom);
}
export async function updateMeetingRoom(meetingRoom: UpdateMeetingRoom) {
  return await axiosInstance.put('/meeting-room/update', meetingRoom);
}

export async function findMeetingRoom(id: number) {
  return await axiosInstance.get('/meeting-room/' + id);
}

export async function searchMeetingRoomList(name: string, capacity: number, equipment: string, pageNo: number, pageSize: number) {
  return await axiosInstance.get('/meeting-room/list', {
      params: {
          name,
          capacity,
          equipment,
          pageNo,
          pageSize
      }
  });
}
