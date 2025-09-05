export default function LandingPage(){ 
    return(
        <div>
        <div class="main-container">
        
        <canvas id="soundwaveCanvas"></canvas>

        <header>
            <div class="logo">MusicPort</div>
            <div class="nav-buttons">
                <a href="#" class="btn btn-signin">Sign In</a>
            </div>
        </header>

        <main>
            <div class="hero-content">
                <div class="features">
                    <div class="feature-item">
                        <i class="fa-solid fa-keyboard"></i>
                        <p>Connect With Artists</p>
                    </div>
                    <div class="feature-item">
                        <i class="fa-solid fa-sliders"></i>
                        <p>Create New Sounds</p>
                    </div>
                    <div class="feature-item">
                        <i class="fa-solid fa-tower-broadcast"></i>
                        <p>Collaborate & Share</p>
                    </div>
                </div>
                
                <a href="#" class="btn-get-started">Get Started</a>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
    </div>
    );    
}
