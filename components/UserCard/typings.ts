import { User } from "@/utils/models";

export interface UserCardProps {
  user: User;
  onLike: () => void;
  onDislike: () => void;
}
