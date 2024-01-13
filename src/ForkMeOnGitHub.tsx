const GitHubForkButton = () => {
  return (
    <a
      href="https://github.com/xditya/visiting-card-generator"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        border: 0,
        zIndex: 1000,
      }}
    >
      <img
        width="149"
        height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149"
        alt="Fork me on GitHub"
      />
    </a>
  );
};

export default GitHubForkButton;
