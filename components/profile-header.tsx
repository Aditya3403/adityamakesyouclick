import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface ProfileHeaderProps {
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
}

export function ProfileHeader({ name, title, description, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="container flex items-center gap-4 p-4 sm:p-6 rounded-xl bg-[#141414] w-full">
      <Avatar className="xl:w-18 xl:h-18 lg:w-16 lg:h-16 md:w-10 md:h-10 sm:w-10 sm:h-10 rounded-full flex-shrink-0">
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} alt={name} />
        ) : (
          <AvatarFallback>{name[0]}</AvatarFallback>
        )}
      </Avatar>
      <div className="text-left">
        <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg font-semibold text-white">{name}</h1>
        <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg font-semibold text-white">{title}</p>
        <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}