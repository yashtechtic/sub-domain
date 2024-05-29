// pages/_company/[subdomain]/index.js
import { useRouter } from 'next/router';

const CompanyHomePage = () => {
  const router = useRouter();
  const { subdomain } = router.query;

  // Fetch company-specific data using the subdomain if needed
  // const data = fetchCompanyData(subdomain);

  return (
    <div>
      <h1>Welcome to {subdomain} Home Page</h1>
      {/* Render company-specific content */}
    </div>
  );
};

export default CompanyHomePage;
