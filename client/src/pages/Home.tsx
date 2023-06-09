import { Query, useQuery } from '../graphql';
import Navbar from '../components/Navbar';
import VibeWrite from '../components/VibeWrite';
import Vibe from '../components/Vibe';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import { Title } from '../components/Title';
import Skeleton from '../components/Skeleton';

export function Home() {
  const [data] = useQuery({
    query: Query.Timeline,
  });

  return (
    <div className="flex pb-20 pt-28 md:pb-28 lg:pb-6">
      <Title text="Home – vibe" />
      <LeftSidebar />
      <div id="inputs" className="mx-auto flex w-[355px] flex-col gap-6 md:w-[500px]">
        <VibeWrite />
        {data.fetching ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col gap-6">
            {data.data?.timeline?.vibes.map((vibe) => (
              <Vibe
                id={vibe.id}
                key={`${vibe.id}`}
                avatar={vibe.user.avatar}
                username={vibe.user.username}
                date={vibe.createdAt}
                smileCount={vibe.smiles.count}
                hasSmiled={vibe.smiles.hasSmiled}
                message={vibe.message}
                commentCount={vibe.replies.count}
              />
            ))}
          </div>
        )}
      </div>

      <RightSidebar />
      <Navbar />
    </div>
  );
}
