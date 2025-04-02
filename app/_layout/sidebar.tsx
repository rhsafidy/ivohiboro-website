import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Images,
  Newspaper,
  Settings,
  ChartNoAxesCombined,
  Info,
  User2,
  Handshake,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

// Menu items.
const items = [
  // {
  //   title: 'Home',
  //   url: '/admin',
  //   icon: Home,
  // },
  {
    title: 'About us',
    url: '/admin/about',
    icon: Info,
  },
  {
    title: 'Partners',
    url: '/admin/partners',
    icon: Handshake,
  },
  {
    title: 'Metrics',
    url: '/admin/metrics',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'News',
    url: '/admin/news',
    icon: Newspaper,
  },
  {
    title: 'Photos',
    url: '/admin/photos',
    icon: Images,
  },
  // {
  //   title: 'Settings',
  //   url: '#',
  //   icon: Settings,
  // },
];
interface Props {
  username: string;
}

export const AdminSidebar: React.FC<Props> = ({ username }) => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Lost forest website</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {username}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={handleLogout}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
