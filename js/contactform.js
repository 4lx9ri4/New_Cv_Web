// ========================================================================= //
//	========================= Contact Form ================================= //
// ========================================================================= //

$(function(){

				$('#contact-form').validate({
					rules: {
						name: {
							required: true,
							minlength: 2
						},
						email: {
							required: true,
							email: true
						},
						message: {
							required: true
						}
					},
					// Modification des dialogues //
					messages: {
						name: {
							required: "Merci d'indiquer votre nom dans ce champ",
							minlength: "Votre nom n'a pas la longueur requise"
						},
						email: {
							required: "Votre adresse courriel est indispensable"
						},
						message: {
							required: "Quel est votre message",
							minlength: "Vous n'avez pas de message?"
						}
					},
					submitHandler: function(form) {
						$(form).ajaxSubmit({
							type:"POST",
							data: $(form).serialize(),
							url:"./php/contact.php",
							success: function() {
								$('#contact-form :input').attr('disabled', 'disabled');
								$('#contact-form').fadeTo( "slow", 0.15, function() {
									$(this).find(':input').attr('disabled', 'disabled');
									$(this).find('label').css('cursor','default');
									$('#success').fadeIn();
								});
							},
							error: function() {
								$('#contact-form').fadeTo( "slow", 0.15, function() {
									$('#error').fadeIn();
								});
							}
						});
					}
				});
			});

// ============================Fin de Contact Form ======================= //