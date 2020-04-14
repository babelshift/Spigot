let gameHeaderTemplate = `
<h4 class="mt-2">
    {{appName}}
    <small>
        <button id="{{appId}}-play" class="btn btn-sm btn-info">
            Play&nbsp;
            <i class="fas fa-gamepad"></i>
        </button>
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
<div id="{{appId}}-details-container">
    <div id="{{appId}}-details" class="row mt-1 p-2"
        style="background:transparent url('{{backgroundImageUrl}}') no-repeat center center /cover">
        <div class="col-md-4 col-sm-6">
            <img src="{{capsuleImageUrl}}" />
        </div>
        <div class="col-md-4 col-sm-6">
            <h5><span id="{{appId}}-player-count"></span> <small class="text-muted">in game</small></h5>
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
            <button id="{{appId}}-view" class="btn btn-primary"><i class="fab fa-steam"></i> Store</button>
        </div>
    </div>
</div>`;