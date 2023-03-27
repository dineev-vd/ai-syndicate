export interface Startup {
  id: string;
  title: string;
  description: string;
  targetBudget: number;
  domain: string;
  currentStatus: string;
}

export type LocalStartup = Partial<Startup>;
