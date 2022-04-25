$( function(){
    $('.card-header').click(function(){
       
        if(  $(this).next('.card-body').hasClass('active')  ){
            $(this).next('.card-body').removeClass('active').slideUp()
            $(this).children('span').removeClass('fa-solid fa-xmark').addClass('fa-plus')

        }else{
            $('.card .card-body').slideUp()
            $('.card .card-header span').removeClass('fa-solid fa-xmark').addClass('fa-plus')
            $(this).next('.card-body').addClass('active').slideDown()
            $(this).children('span').removeClass('fa-plus').addClass('fa-solid fa-xmark')

        }
    })

   /** Modal Btn close Modal  */ 
    $('#close-modal').click( function(){
    
         $('.modal').css('display', 'none')
         $('.modal .modal-content').empty().html('<h2>Rick And Morthy o Conteúdo estará disponível em breve!!!!</h2>')
    })

  /** Modal Btn watch */ 
    $('#btn-watch').click( function () { 
        $('.modal').css('display', 'flex')

     })

     /** Modal Btn info  */ 
     $('#btn-info').click( function(){
        $('.modal').css('display', 'flex')
        $('.modal .modal-content').empty().html(' <h2>Desculpe...</h2> <p> Sem mais informações disponíves.</p><p> Aguarde, em breve teremos Novidades!</p>')
     })

})
