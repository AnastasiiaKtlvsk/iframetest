<style>
.chasitorText, .slds-input, .textAreaBox {    
    -webkit-user-select: text !important;
	user-select: text !important;
	-moz-user-select: text !important;
	-ms-user-select: text !important;
}

@media screen and (max-width: 1280px) {
	.embeddedServiceHelpButton {
		display: none !important;
	}

	.modalContainer {
        position: absolute !important;
        z-index: 99999 !important;
    }

	.minimizedContainer {
		position:fixed !important;
		bottom:70px !important;
		width:115px !important;
		right:2px !important;	
		height: 20px !important;
		font-weight: normal !important;
	}

	.cChatButton .messageText {
		margin-left: 3px !important;
		font-size: 10px !important;
	}

	.cChatButton .buttonMinimized {
		height: 30px !important;
	}

	.cChatButton .chatIcon {
		width: 14px !important;
		height: 14px !important;
	}
}

li.wrapper.chatMessage, 
li.wrapper.chatMessage.chasitor.embeddedServiceLiveAgentStateChatItem.embeddedServiceLiveAgentStateChatMessage,
li.wrapper.chatMessage.chasitor.embeddedServiceLiveAgentStateChatItem.embeddedServiceLiveAgentStateChatBubble.embeddedServiceLiveAgentStateChatFileTransferMessage,
li.wrapper.embeddedServiceLiveAgentStateChatMessage  {
	min-width: 2px !important;
}

svg.slds-icon.slds-icon-text-default.slds-icon_x-small {
	height: 20px !important;
	min-height: 20px !important;
	width: 20px !important;
	min-width: 20px !important;
}

.helpButtonEnabled .embeddedServiceIcon {
	width: 16.67px;
	height: 16.67px;
	background-size: 16.67px;
	background-image: url('https://parimatch.my.salesforce.com/sfc/dist/version/download/?oid=00D2p00000139LC&ids=0682p00000IBW5vAAH&d=/a/2p0000002WaJ/DKlkpg7OjXdmJs.Cz8o.MXqLhdB9Vn9g9lqz3Y0G4GU&operationContext=DELIVERY&viewId=05H2p0000024IzmEAE&dpt=');
}

.dialog-button-1 {
	width: 44px;
	height: 44px;
	border: 1px solid #262626 !important;
	box-sizing: border-box;
	background-color: white !important;
	border-radius: 4px;
	background-image: url('https://parimatch.my.salesforce.com/sfc/dist/version/download/?oid=00D2p00000139LC&ids=0682p00000IBVvVAAX&d=/a/2p0000002WZL/EbswtRJfxx4DhJcNOONu7B9_1QbekBDrZLe7lr_6C0o&operationContext=DELIVERY&viewId=05H2p0000024IwiEAE&dpt=') !important;
	background-size: 16px !important;
	background-position-x: center !important;
	background-position-y: center !important;
	background-repeat: no-repeat !important;
	display: block !important;
}

.waitingMessage, .waitingGreeting {
	color: black !important;
}

@media only screen and (min-width: 48em) { 
	.embeddedServiceHelpButton .helpButton .uiButton:hover::before, .embeddedServiceHelpButton .helpButton .uiButton:focus::before {
		display: none !important;
	}
}

h3#dialogTextTitle, .waitingGreeting, .embeddedServiceSidebarButton {
    font-weight: 700 !important;
}

.embeddedServiceSidebarButton {
    font-size: 14px !important;
}

button.minimizeButton:focus, button.closeButton:focus{
	outline: none;
	box-shadow: none;
}

.embeddedServiceSidebarExtendedHeader, .headerAnnouncement {
	display: none !important;
}

.embeddedServiceSidebarMinimizedDefaultUI {
	background: #F8FF13 !important;
	background-color: #F8FF13 !important;
}

.embeddedServiceHelpButton .helpButton {
	bottom: 16px !important;
	height: 40px !important;
	width: 168px !important;
	display: flex !important;
	justify-content: center !important;
	border-radius: 30px !important;
}

.embeddedServiceHelpButton .helpButton .uiButton {
	background-color: #222222;
	font-family: "Circe", sans-serif;
	color: black;
	height: 40px !important;
	width: 168px !important;
	display: block !important;
}

.embeddedServiceHelpButton .helpButton .uiButton:focus {
	outline: 1px solid #222222;
}

.embeddedServiceSidebar.layout-docked .dockableContainer, .embeddedServiceSidebarMinimizedDefaultUI.helpButton {
	border-radius: 0px;
}

.embeddedServiceHelpButton .helpButton .uiButton,
.embeddedServiceSidebarMinimizedDefaultUI.helpButton,
.embeddedServiceSidebarMinimizedDefaultUI.minimizedContainer:focus,
.embeddedServiceSidebarMinimizedDefaultUI.minimizedContainer:hover {
	background-color: #F8FF13 !important;
	border-color: #F8FF13 !important;
	color:#000000 !important;
	border-radius: 30px !important;
	padding: 0px 0px 0px 0px !important;
	box-shadow: none !important;
	outline: none !important;
	border-style: unset !important;
	text-decoration: none !important;
}

.helpButtonLabel {
	display: inline-block !important;
	line-height: 16.67px !important;
}

span.fileDescription.uiOutputText, span.fileName.uiOutputText, .uiOutputRichText a  {
	color: black !important;
}

.dialogButtonContainer {
	display: flex !important;
	justify-content: space-between !important;
	flex-direction: row-reverse !important;
	width: 290px !important;
	margin: auto !important;
	padding: 0 0px 16px !important;
}

.dialog-button-0 {
	width: 236px;
	height: 44px;
}

.message, .embeddedServiceSidebarMinimizedDefaultUI .content {
	background-color: #F8FF13 !important;
	border: none !important;
	padding: 0 0 0 0 !important;
	margin: 0 0 0 0  !important;
	font-family: Roboto Condensed;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 16.67px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color:#000000;
	text-decoration: none;
}

.embeddedServiceHelpButton .helpButton .helpButtonEnabled:hover::before, .embeddedServiceHelpButton .helpButton .helpButtonEnabled:focus::before {
	background-color: white;
}

.messageContent path {
	stroke: black;
	fill: black;
}

.embeddedServiceSidebarButton .label, .embeddedServiceSidebarButton:disabled .label, .embeddedServiceLiveAgentStateChatPlaintextMessageDefaultUI.chasitor.plaintextContent {
	color: black;
}

.dialog-button-1 .bBody, .helpButtonEnabled .embeddedServiceIcon::before, .helpButtonEnabled .embeddedServiceIcon svg, .embeddedServiceHelpButton .helpButton .uiButton.helpButtonDisabled   {
	display: none !important;
}

.embeddedServiceSidebarDialogState .dialogButton,
.embeddedServiceSidebarDialogState .dialogButton:focus,
.embeddedServiceSidebarDialogState .dialogButton:hover {
	background-color: #F8FF13;
	border-color: #F8FF13;
	color:#000000;
	padding: 10px 16px 10px 16px;
	box-shadow: none;
	outline: none;
	border-style: unset;
	text-decoration: none;
}

.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus,
.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):hover,
.embeddedServiceSidebarButton.uiButton--inverse, .embeddedServiceSidebarButton.uiButton--inverse:disabled {
	background-color: #F8FF13;
	margin-bottom: 8px;
}

.embeddedServiceSidebarButton.uiButton--inverse .label {
	color:#000000 !important;
}

.embeddedServiceLiveAgentStateChatInputFooter .chasitorControls .uiInput {
	border: 1px solid #D9D9D9;
}

.embeddedServiceLiveAgentStateChat .messageArea {
	border: none;
}

.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button:hover,
.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button:focus,
.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button:active {
	color: #787c80 !important;
}

.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button:focus {
	box-shadow: none;
}

.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu-items .slds-dropdown__item>a {
	border: none !important;
	box-shadow: none !important;
}

.embeddedServiceSidebarButton:not(:disabled):focus, .embeddedServiceSidebarButton:not(:disabled):hover,
.embeddedServiceLiveAgentStateChat .endChatContainer .endChatButton {
	background: var(--lwc-colorBrandSecondary,#f8ff13);
	margin-bottom: 8px;
}

.uiButton--default:hover .label, .uiButton--default:focus .label {
	color:black;
}

.embeddedServiceLiveAgentStateChatInputFooter {
	margin-bottom: 0px !important;
}

.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-dropdown-trigger_click.slds-is-open .slds-button {
	color:#787c80;
}

.embeddedServiceLiveAgentStateChat .messageArea:focus {
	border: none;
}

.embeddedServiceLiveAgentStateWaiting .loadingBall,
.embeddedServiceLiveAgentQueuePosition .embeddedServiceLoadingBalls .loadingBall {
	background-color: #787c80 !important;
}

.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu-items .slds-dropdown__item>a {
    color: #5a5d60 !important;
}

</style>

<script type="text/javascript" charset="UTF-8" >


	document.onclick = function(event) {
	var tagName = event.target.tagName;
	if (tagName == "EMBEDDEDSERVICE-CHAT-HEADER") {
		var counter = document.getElementsByClassName("dot")[0];
		if (counter) {
			counter.style.visibility = "hidden";
			document.title = title;
		}
	}
}

document.addEventListener(
		"setCounter",
		function(event) {
			var counter = document.getElementsByClassName("dot")[0];
			if (counter) {
				counter.style.visibility = "visible";
			}
		},
		false
);


document.addEventListener(
	"setCustomField",
	function(event) {
		var detail = event.detail;
		embedded_svc.settings.extraPrechatFormDetails[0].value = event.detail.name;
		embedded_svc.settings.extraPrechatFormDetails[1].value = event.detail.email;
		embedded_svc.settings.extraPrechatFormDetails[2].value = event.detail.phone;
		// Fire startChat callback.
		event.detail.callback();
	},
	false
);

var title = document.title;


	var accountId = '{{userID}}';
    accountId = (accountId == "undefined") ? null : accountId;
    var language = document.querySelector('html').getAttribute('lang');
	language = (language == 'en') ? 'en-US' : language;
	
	var initESW = function(gslbBaseURL) {
    embedded_svc.settings.avatarImgURL = 'https://parimatch.my.salesforce.com/sfc/dist/version/download/?oid=00D2p00000139LC&ids=0682p00000IBVx0AAH&d=/a/2p0000002WZk/yvHSdKsnO5Oleeq8kNuO.gtRUyuu8P0dmdZoe1aGxcA&operationContext=DELIVERY&viewId=05H2p0000024IzSEAU&dpt=';
    embedded_svc.settings.chatbotAvatarImgURL = 'https://parimatch.my.salesforce.com/sfc/dist/version/download/?oid=00D2p00000139LC&ids=0682p00000IBVx0AAH&d=/a/2p0000002WZk/yvHSdKsnO5Oleeq8kNuO.gtRUyuu8P0dmdZoe1aGxcA&operationContext=DELIVERY&viewId=05H2p0000024IzSEAU&dpt=';
    embedded_svc.settings.displayHelpButton = true;
    embedded_svc.settings.language = language;

    embedded_svc.settings.defaultMinimizedText = (language == 'ru') ? '?????? ??????????????????' : 'SUPPORT CHAT';
    embedded_svc.settings.disabledMinimizedText = (language == 'ru') ? '?????? ??????????????????' : 'SUPPORT CHAT';
    embedded_svc.settings.loadingText = (language == 'ru') ? '????????????????...' : 'Loading...';

    embedded_svc.settings.extraPrechatFormDetails = (accountId) ?
    [
        {"label":"PreChat Form AccountID", "transcriptFields": ["PreChat_Form_AccountID__c"], "value" : accountId},
        {"label":"Start Url", "transcriptFields": ["Prechat_StartUrl__c"], "value": window.location.href,"displayToAgent":false},
        {"label":"Is Logged", "transcriptFields": ["Is_Logged__c"], "value" : "true"}
    ] :

    [
        {"label":"Name",  "transcriptFields": ["PreChat_Form_Name__c"]},
        {"label":"Email", "transcriptFields": ["PreChat_Form_Email__c"]},
        {"label":"Phone", "transcriptFields": ["PreChat_Form_Phone__c"]},
        {"label":"Start Url", "transcriptFields": ["Prechat_StartUrl__c"], "value": window.location.href,"displayToAgent":false}
    ];

	embedded_svc.settings.extraPrechatInfo = [{"entityFieldMaps":[{"doCreate":false,"doFind":false,"fieldName":"LastName","isExactMatch":true,"label":"Last Name"}],"entityName":"Contact","showOnCreate":true}];

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';

 	embedded_svc.init(
        	'https://parimatch--staging.my.salesforce.com',
			'https://staging-parimatchchat.cs105.force.com/surveychat',
            gslbBaseURL,
            '00D1w0000000b0e',
            (accountId) ? 'Chat_Deployment_LoginUser_New' : 'Chat_Deployment_Desktop_New',
            {
                baseLiveAgentContentURL: 'https://c.la1-c1cs-fra.salesforceliveagent.com/content',
                deploymentId: '5722p0000000G2t',
                buttonId: (language == 'ru') ? '5732p0000000GqZ' : '5732p0000000GqU',
                baseLiveAgentURL: 'https://d.la1-c1cs-fra.salesforceliveagent.com/chat',
                eswLiveAgentDevName: (accountId) ? 'EmbeddedServiceLiveAgent_Parent04I2p0000008PviEAE_177ee7ddf7d' :
                'EmbeddedServiceLiveAgent_Parent04I2p0000008PvdEAE_177ee4a5348',
                isOfflineSupportEnabled: false
            }
    );
};

if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://parimatch--staging.my.salesforce.com/embeddedservice/5.0/esw.min.js');
    s.onload = function() {
        initESW(null);
    };
    document.body.appendChild(s);
} else {
    initESW('https://service.force.com');
}

</script>