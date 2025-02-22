export type DashboardId = number;

export type Dashboard = {
  id: DashboardId;
  name: string;
  // TODO: rewrite to string
  columns: ('done' | 'todo' | 'in_progress')[];
};