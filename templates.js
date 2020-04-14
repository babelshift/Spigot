let gameHeaderTemplate = `
<h4>
    {{appName}}
    <small>
        <a href="steam://run/{{appId}}" target="hidden-iframe" class="btn btn-sm btn-info">
            Play&nbsp;
            <i class="fas fa-gamepad"></i>
        </a>
    </small>
    <small>
        <button id="{{appId}}-show-details" class="btn btn-sm btn-secondary">
            <span id="{{appId}}-show-details-text">Show Details</span>&nbsp;
            <span id="{{appId}}-hide-details-text">Hide Details</span>&nbsp;
            <i id="{{appId}}-show-icon" class="fas fa-chevron-circle-left"></i>
        </button>
    </small>
</h4>`;

let gameDetailsTemplate = `
<div id="{{appId}}-details" class="row mt-1 p-2"
    style="background:transparent url('{{backgroundImageUrl}}') no-repeat center center /cover">
    <div class="col-md-4 col-sm-6">
        <img src="capsuleImageUrl" />
    </div>
    <div class="col-md-4 col-sm-6">
        <h5>482,262 <small class="text-muted">in game</small></h5>
        <h5>284 <small class="text-muted">hours played</small></h5>
        <div class="icon-spacing">
            <p class="m-0 p-0">
                <i class="fas fa-user" data-toggle="tooltip" data-placement="top"
                    title="Single Player"></i>&nbsp;
                <i class="fas fa-asterisk" data-toggle="tooltip" data-placement="top"
                    title="Achievements"></i>&nbsp;
                <i class="fas fa-cloud" data-toggle="tooltip" data-placement="top"
                    title="Cloud Saves"></i>&nbsp;
                <i class="fas fa-gamepad" data-toggle="tooltip" data-placement="top"
                    title="Full Controller Support"></i>
            </p>
        </div>
    </div>
    <div class="col-md-4 text-right">
        <h5>
            <i class="fab fa-windows" data-toggle="tooltip" data-placement="top" title="Windows"></i>&nbsp;
            <i class="fab fa-apple" data-toggle="tooltip" data-placement="top" title="Mac"></i>&nbsp;
            <i class="fab fa-linux" data-toggle="tooltip" data-placement="top" title="Linux"></i>
        </h5>
        <a href="steam://store/{{appId}}" target="hidden-iframe" class="btn btn-primary"><i class="fab fa-steam"></i> View in Steam</a>
    </div>
</div>`;