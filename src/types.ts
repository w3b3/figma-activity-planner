export interface Context {
  updateSelectedCard: (id: string) => void;
  selectedCard: string;
  userData: UserData;
}
export interface UserData {
  user: {
    id: string;
    name: string;
    email: string;
  };
  meta: {
    lastLogin: string;
    authenticated: boolean;
  };
  cards: Card[];
}

export interface Card {
  id: string;
  title: string;
  description: {
    text: string;
  };
  date: {
    month: string;
    year: string;
    day: string;
    hour: string;
    minute: string;
    weekday: string;
  };
  meta: {
    pinned: boolean;
    archived: boolean;
    deleted: boolean;
    ignored: boolean;
    downloaded: boolean;
  };
}
