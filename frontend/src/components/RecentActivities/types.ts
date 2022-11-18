export type RecentActivitiesStatus = 'Alert' | 'Message' | 'Edit';

export type IRecentActivity = {
  user: string;
  message: string;
  date: string;
  type: RecentActivitiesStatus;
};
