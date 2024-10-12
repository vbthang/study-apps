/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};

declare type App = {
  $id: string;
  appId: string;
  accessToken: string;
  userId: string;
};

declare interface HeaderBoxProps {
  type?: 'title' | 'greeting';
  title: string;
  subtext: string;
  user?: string;
}

declare interface MobileNavProps {
  user: User;
}

declare interface PageHeaderProps {
  topTitle: string;
  bottomTitle: string;
  topDescription: string;
  bottomDescription: string;
  connectApp?: boolean;
}

declare interface PaginationProps {
  page: number;
  totalPages: number;
}

declare interface AuthFormProps {
  type: 'sign-in' | 'sign-up';
}

declare interface FooterProps {
  user: User;
}

declare interface SiderbarProps {
  user: User;
}

declare interface CategoryBadgeProps {
  category: string;
}

declare interface CategoryProps {
  category: CategoryCount;
}

// Actions
declare interface signInProps {
  email: string;
  password: string;
}

declare interface getUserInfoProps {
  userId: string;
}

declare interface exchangePublicTokenProps {
  publicToken: string;
  user: User;
}

declare interface getAppsProps {
  userId: string;
}

declare interface getAppProps {
  documentId: string;
}
