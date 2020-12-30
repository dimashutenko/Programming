jQuery(document).ready(function ($) {
    var output = document.getElementById('output'), clear_output_flag=false, buffer_1=0, current_operation='';

    set_output = (value) => {
        if(value === Infinity || value.toString() === 'NaN'){
            output.innerHTML='You broke it';

            setTimeout(function(){
                $('.calculator-body').removeClass('fade_in');
                $('.calculator-body').addClass('fade_away');
            }, 1000);

            setTimeout(function(){
                $('#reloading').css({'display':'flex'});
                $('#reloading').addClass('fade_in_quick');
                $('.lds-spinner div').addClass('spinner_run');
            }, 2000);

            setTimeout(function(){
                $('#reloading').removeClass('fade_in_quick');
                $('#reloading').addClass('fade_away_quick');
            }, 4000);
                

            setTimeout(function(){
                clear_output();
                $('.calculator-body').addClass('fade_in');
                $('.calculator-body').removeClass('fade_away');
            }, 4000);
            
        }
        else if(output.innerHTML === '0'){
            output.innerHTML=Number(value);
            console.log('output set to '+output.innerHTML);
        }
        else if (value.slice(-1) === '.'){
            output.innerHTML=value;
        }
        else{
            output.innerHTML=Number(output.innerHTML.toString()+value.toString());
            console.log('output set to '+output.innerHTML);
        }
        
    }
    get_output = () => {
        return Number(output.innerHTML)
    }
    clear_output = () => {
        output.innerHTML='0';
        console.log('output cleared');
    };
    set_buffer_1 = (value) => {
        buffer_1=Number(value);
        console.log('buffer_1 set to '+buffer_1);
    }
    get_buffer_1 = () => {
        return Number(buffer_1);
    }
    clear_buffer = (buffer) => {
        buffer=0;
    };
    func_clear_all = () => { 
        clear_buffer(buffer_1);
        clear_output();
    }

    document.querySelectorAll('.digit').forEach(digit_button => {
        digit_button.addEventListener('click', function(){
            var digit = this.innerHTML;
            console.log(digit+' clicked');
            if (clear_output_flag==true){
                clear_output();
                clear_output_flag=false;
                set_output(digit);
            }
            else{
                set_output(digit);
            }
        });
    });
    document.querySelectorAll('.operation').forEach(operation_button => {
        operation_button.addEventListener('click', function(){
            current_operation = this.innerHTML; 
            console.log(current_operation+' clicked');
            set_buffer_1(get_output());
            clear_output_flag=true;
        });
    });

    dot_clicked = () => { 
        console.log('dot clicked');
        set_output(get_output()+'.');
    };

    equal_clicked = () => { 
        var second_value=Number(get_output());
        clear_output();
        switch(current_operation){
            case '+':
                set_output(Number.parseFloat(get_buffer_1()+second_value).toPrecision(10));
                set_buffer_1(get_output());
                break;
            case '-':
                set_output(Number.parseFloat(get_buffer_1()-second_value).toPrecision(10));
                set_buffer_1(get_output());
                break;
            case '*':
                set_output(Number.parseFloat(get_buffer_1()*second_value).toPrecision(10));
                set_buffer_1(get_output());
                break;
            case '/':
                set_output(Number.parseFloat(get_buffer_1()/second_value).toPrecision(10));
                set_buffer_1(get_output());
                break;
            default:
                console.log(`Sorry, I can't '${current_operation}'`);
                set_output(second_value);
                set_buffer_1(second_value);
        }
    }

});    