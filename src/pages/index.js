import Navbar from "@/components/navbar/navbar";
import Tabs from "@/components/tabs/tabs";
import Sidebar from "@/components/sidebar/sidebar";
import Job from "@/components/job/job";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col `}
    >
      <Navbar />
      <Tabs />
      <div className={'flex flex-col justify-between md:flex-row '}>
        <Job />
        <Sidebar />
      </div>


    </main>
  );
}
