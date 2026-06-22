import { redirect } from "next/navigation";


export default function TenantPage() {
  redirect("/dashboard/tenant/overview");
}