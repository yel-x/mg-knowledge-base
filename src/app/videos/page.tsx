import VideoCard from "@/components/videos/VideoCard";
import { mockVideos } from "@/data";
export default function VideosPage() { return <div className="space-y-8"><div><p className="eyebrow">Demo library</p><h1 className="mt-2 text-3xl font-semibold">Video tutorials</h1><p className="mt-3 max-w-2xl text-[#687981]">Sample tutorial records prepared for future video hosting integration.</p></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{mockVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div></div>; }
