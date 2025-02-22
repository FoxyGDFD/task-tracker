import { useQuery } from "@tanstack/vue-query"
import { TaskApi } from "../api"
import { TaskListParams } from "../types"

export const useListTasks = (params: TaskListParams) => {
  return useQuery({
    queryKey: ['tasks', params],
    queryFn: () => TaskApi.list(params)
  })
}