import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useLocation, Outlet } from "react-router-dom";

const Create = () => {
  const location = useLocation();
  console.log(location.pathname);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Flex alignItems="center" justify="center">
      {location.pathname === "/create" ? (
        <>
          <Link
            href="/create/sop"
            //   isExternal
          >
            Create SOP <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href="/create/task"
            //   isExternal
          >
            Create Task <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href="/create/project"
            //   isExternal
          >
            Create Project <ExternalLinkIcon mx="2px" />
          </Link>
        </>
      ) : (
        <Flex flexDir="column" justify="center" alignItems="center">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/create">Create</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">
                {capitalizeFirstLetter(location.pathname.split("/").at(-1))}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Outlet />
        </Flex>
      )}
    </Flex>
  );
};
export default Create;
