function FollowOption() {
  return (
    <div className="followOption">
      <div className="followOption-right">
        <div>
          <img src="https://picsum.photos/80" alt="Profile" />
        </div>
        <div>
          <p>The Coder Cave</p>
          <span className="nick">@CaveCoder</span>
        </div>
      </div>
      <div className="followOption-left">
        <button>Follow</button>
      </div>
    </div>
  );
}

export default FollowOption;