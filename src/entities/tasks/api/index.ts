import { client } from "@shared/lib";
import { Task, TaskListParams } from "../types";

export const TaskApi = {
  create: async (data: Task) => await client.post<Task>('/tasks', data).then(({data}) => data),
  read: async (id: number) => await client.get<Task>(`/tasks/${id}`).then(({data}) => data),
  update: async (id: number, data: Partial<Task>) => await client.patch(`/tasks/${id}`, data).then(({data}) => data),
  delete: async (id: number) => await client.delete<Task>(`/tasks/${id}`).then(({data}) => data),
  list: async (params: TaskListParams) => await client.get<Task[]>(`/tasks${params && `?${Object.entries(params).map(([key, value])=> `${key}=${value}`).join('&')}`}`).then(({data}) => data),
}