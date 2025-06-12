export interface CardProps {
  title: string;
  content: string;
}
export interface HeaderProps {
  title: string;
  links: { href: string; label: string }[];
}
export interface FooterProps {
  text: string;
}
export interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}
export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
// interfaces/index.ts
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
// interfaces/index.ts
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
// Add to interfaces/index.ts
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
