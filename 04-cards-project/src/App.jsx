import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part-Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://toppng.com/uploads/preview/google-logo-transparent-png-11659866441wanynck5pd.png",
      companyName: "Google",
      datePosted: "30 days ago",
      post: "Graphic Designer",
      tag1: "Part-Time",
      tag2: "Flexible Schedule",
      pay: "$150-220k",
      location: "Kochi, India",
    },
    {
      brandLogo:
        "https://pluspng.com/img-png/dribbble-logo-png-dribbble-logo-icon-png-image-free-img-searchpng-circle-860x737.png",
      companyName: "Dribbble",
      datePosted: "18 days ago",
      post: "Senior Motion Designer",
      tag1: "Contract",
      tag2: "Remote",
      pay: "$85/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-File.png",
      companyName: "Figma",
      datePosted: "5 days ago",
      post: "UX Designer",
      tag1: "Full-Time",
      tag2: "In office",
      pay: "$200-250k",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logodix.com/logo/568333.png",
      companyName: "Airbnb",
      datePosted: "5 days ago",
      post: "Junior UI/UX Designer",
      tag1: "Contract",
      tag2: "Remote",
      pay: "$100/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "Graphic Designer",
      tag1: "Full-Time",
      tag2: "Flexible Schedule",
      pay: "$85-120k",
      location: "Kerala, India",
    },
    {
      brandLogo:
        "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Full-Time",
      tag2: "Remote",
      pay: "$130-180k",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "7 days ago",
      post: "Visual Designer",
      tag1: "Contract",
      tag2: "Flexible Schedule",
      pay: "$110/hr",
      location: "Pune, India",
    },
  ];
  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
