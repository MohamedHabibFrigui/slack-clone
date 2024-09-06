import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ConversationHeroProps {
  name?: string;
  image?: string;
}

const ConversationHero = ({
  name = "Member",
  image,
}: ConversationHeroProps) => {
  const avatarFallback = name.charAt(0).toUpperCase();

  return (
    <div className="mt-[88px] mx-5 mb-4">
      <div className="flex items-center gx* mb-2">
        <Avatar className="size-14 mr-1">
          <AvatarImage src={image} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <p className="text-2xl font-bold"># {name}</p>
      </div>
      <p className="font-normal text-slate-800 mb-4">
        This converstion is just between you and <strong>{name}</strong>
      </p>
    </div>
  );
};

export default ConversationHero;
