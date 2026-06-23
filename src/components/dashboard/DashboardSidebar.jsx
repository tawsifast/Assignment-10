import { getUserSession } from "@/lib/core/session";
import { Button, Drawer } from "@heroui/react";
import { Bars } from "@gravity-ui/icons";
import { SidebarLinks } from "./SidebarLinks";


export async function DashboardSidebar() {
  const user = await getUserSession();
  const userRole = user?.role?.toLowerCase() || "tenant";

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-divider p-4 bg-[#0a0a0f]">
        <SidebarLinks role={userRole} />
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden p-3 border-b border-divider bg-[#0a0a0f] flex items-center justify-between w-full">
        <Drawer>
          <Button isIconOnly variant="light" size="md">
            <Bars className="size-5 text-foreground" />
          </Button>

          <Drawer.Backdrop>
            <Drawer.Content placement="left" className="max-w-[280px]">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header className="px-5 pt-6 pb-2">
                  <Drawer.Heading className="text-base font-bold text-foreground">Navigation</Drawer.Heading>
                </Drawer.Header>

                <Drawer.Body className="px-4 py-2">
                  <SidebarLinks role={userRole} />
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}