import Link from "next/link";
import { Truck, Phone } from "lucide-react";
import { Container } from "../ui/Container";

const MiniHeader = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <p className="text-xs text-muted-foreground">রকমারিতে স্বাগতম!</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="flex items-center gap-2">
                <Truck size={16} color="gray" />
                <p className="text-xs text-muted-foreground">
                  অর্ডার ট্র্যাক করুন
                </p>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center gap-2">
                <Phone size={16} color="gray" />
                <p className="text-xs text-muted-foreground">কল করুন</p>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default MiniHeader;
