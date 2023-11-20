function VerifiedEmail() {
  //   const location = useLocation();
  //   const params = useParams();

  // useEffect(() => {
  //     const verifyEmail = async () => {
  //         const id = "sjjs"
  //         const { data } = await axiosInstance.get(
  //           `https://heal-haven.onrender.com/api/users/${userID}/verify/${token}`
  //         );
  //     }
  // },[])

  return (
    <section className="h-screen">
      <div className="healHavenContainer flex h-full flex-col items-center justify-center gap-3">
        <p>
          A Link has been sent to your mail, click on the link to verify your
          account
        </p>
      </div>
    </section>
  );
}

export default VerifiedEmail;
