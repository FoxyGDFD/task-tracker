import { QueueId } from "@entities/queues/types";
import { UserId } from "@entities/users/types";

type TaskId = number;

export type Task = {
  id: TaskId;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignedTo: UserId; // ID пользователя
  queueId: QueueId; // ID очереди
};

export type TaskListParams = {
  title_like?: string;
  status?: 'todo' | 'in_progress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  assignedTo?: UserId;
  queueId?: QueueId;
};