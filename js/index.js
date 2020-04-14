function getCategoryIcon(value) {
    switch (value) {
        case 2: return 'fas fa-user';
        case 1: return 'fas fa-users';
        case 49:
        case 36:
        case 37:
            return 'fas fa-people-arrows';
        case 36: return 'fas fa-globe';
        case 47: return 'fas fa-network-wired';
        case 27: return 'fas fa-project-diagram';
        case 22: return 'fas fa-asterisk';
        case 23: return 'fas fa-cloud';
        case 17: return 'fas fa-edit'
        case 28:
        case 18:
            return 'fas fa-gamepad';
        case 29: return 'fas fa-copy';
        case 30: return 'fas fa-city';
        case 35: return 'fas fa-hand-holding-usd';
        case 8: return 'fas fa-virus-slash';
        case 15: return 'fas fa-chart-pie';
        case 43: return 'fas fa-tv';
        case 9:
        case 38:
        case 39:
        case 48:
            return 'fas fa-handshake';
        case 40: return 'fas fa-vr-cardboard';
        case 24: return 'fas fa-user-friends';
        case 41: return 'fas fa-mobile-alt';
        case 42: return 'fas fa-tablet-alt';
        case 44: return 'fas fa-wifi';
        case 25: return 'fas fa-chart-line';
        case 13: return 'fas fa-closed-captioning';
        case 14: return 'fas fa-comment-dots';
        default:
            return 'fas fa-question';
    }
}