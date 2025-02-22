import { useQuery } from "@tanstack/vue-query"
import { DashboardApi } from "../api"

export const useReadDashboard = () => {
  return useQuery({
    queryKey: ['dashboards'],
    // TODO: rewrite to id param
    queryFn: () => DashboardApi.read(1)
  })
}