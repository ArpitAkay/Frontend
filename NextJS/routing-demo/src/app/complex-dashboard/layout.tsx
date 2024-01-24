export default function RootLayout({
  children,
  login,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  const isLogin = false;
  if (isLogin) {
    return (
      <div>
        <div>{children}</div> {/* complex-dashboard/@children/page.tsx */}
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    );
  } else {
    return login;
  }
}
