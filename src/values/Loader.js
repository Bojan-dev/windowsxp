export default function Loader({ clearLoader }) {
    return (
      <div class="window" onAnimationStart={clearLoader}>
        <div class="logo">
          <p class="top">Microsoft</p>
          <p class="mid">
            Windows<span>XP</span>
          </p>
          <p class="bottom">Professional</p>
        </div>
        <div class="container">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>
    );
  }