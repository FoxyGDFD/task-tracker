import { client } from "@shared/lib";
import { Dashboard } from "../types";

export const DashboardApi = {
  create: async (data: Dashboard) => await client.post<Dashboard>('/dashboards', data).then(({data}) => data),
  read: async (id: number) => await client.get<Dashboard>(`/dashboards/${id}`).then(({data}) => data),
  update: async (id: number, data: Partial<Dashboard>) => await client.patch(`/dashboards/${id}`, data).then(({data}) => data),
  delete: async (id: number) => await client.delete<Dashboard>(`/dashboards/${id}`).then(({data}) => data),
  list: async () => await client.get<Dashboard[]>('/dashboards').then(({data}) => data),
}