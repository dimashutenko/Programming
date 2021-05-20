jQuery(document).ready(function ($) {

	range = () => {

		let tasks = [], tasks_ranged = [], task1_time, task2_time, task3_time, task1_value, task2_value, task3_value, total_value=0;

		let total_time = Number(document.getElementById('total_time').value);

		//с увеличение n сменить на for
		task1_time = document.getElementById('task1_time').value;
		task1_value = document.getElementById('task1_value').value;
		task2_time = document.getElementById('task2_time').value;
		task2_value = document.getElementById('task2_value').value;
		task3_time = document.getElementById('task3_time').value;
		task3_value = document.getElementById('task3_value').value;

		const task1 = {
		  name: document.getElementById('task1_name').innerHTML,
		  time: Number(document.getElementById('task1_time').value),
		  value: Number(document.getElementById('task1_value').value)
		};
		tasks.push(task1);
		const task2 = {
		  name: document.getElementById('task2_name').innerHTML,
		  time: Number(document.getElementById('task2_time').value),
		  value: Number(document.getElementById('task2_value').value)
		}
		tasks.push(task2);
		const task3 = {
		  name: document.getElementById('task3_name').innerHTML,
		  time: Number(document.getElementById('task3_time').value),
		  value: Number(document.getElementById('task3_value').value)
		}
		tasks.push(task3);
		
		// debugger;

		set_value = (number) =>{
			document.getElementById('total_value').innerHTML = number;
		}

		get_productivity = (time,value) =>{
			return value/time;
		}

		// tasks.forEach(task => task.productivity = get_productivity(task.time, task.value));
		
		for(let i=0;i<tasks.length;i++){ // calculating productivity and excluding too timeconsuming tasks
			
			tasks[i].productivity = get_productivity(tasks[i].time, tasks[i].value);
			if (tasks[i].time>=total_time){
				tasks.splice(tasks.indexOf(tasks[i]), 1);
				i--;
			};
		};

		debugger;
		
		let bubbleSort = (inputArr) => {
		    let len = inputArr.length-1;
		    for (let i = 0; i < len; i++) {
		        for (let j = 0; j < len; j++) {
		            if (inputArr[j].productivity < inputArr[j + 1].productivity) {
		                let tmp = inputArr[j];
		                inputArr[j] = inputArr[j + 1];
		                inputArr[j + 1] = tmp;
		            }
		        }
		    }
		    return inputArr;
		};

		tasks_ranged = bubbleSort(tasks);
		console.log(tasks_ranged);

		for(let i=0;i<tasks_ranged.length;i++){
			if(tasks_ranged[i].time<=total_time){
				total_time-=tasks_ranged[i].time;
				total_value+=tasks_ranged[i].value;
			} else {
				tasks_ranged.splice(tasks_ranged.indexOf(tasks_ranged[i]), 1);
			}
		};

		set_value(total_value);

		// for (let i=0;i<tasks.length;i++){
		// 	if(tasks[i].time>=top_productivity_task.time){
		// 		top_productivity_task=tasks[i];
		// 	}
		// 		tasks_ranged.push(tasks[i]);
		// 		total_time-=tasks[i].time;
		// 		total_value+=tasks[i].value;
		// 		set_value(total_value);
		// }

		clear_ranged_tasks = () =>{
			document.getElementById('task1_n').innerHTML = '';
			document.getElementById('task1_t').innerHTML = '';
			document.getElementById('task1_v').innerHTML = '';
			document.getElementById('task2_n').innerHTML = '';
			document.getElementById('task2_t').innerHTML = '';
			document.getElementById('task2_v').innerHTML = '';
			document.getElementById('task3_n').innerHTML = '';
			document.getElementById('task3_t').innerHTML = '';
			document.getElementById('task3_v').innerHTML = '';
		}
		
		fill_ranged_tasks = () =>{
			document.getElementById('task1_n').innerHTML = tasks_ranged[0].name;
			document.getElementById('task1_t').innerHTML = tasks_ranged[0].time;
			document.getElementById('task1_v').innerHTML = tasks_ranged[0].value;
			document.getElementById('task2_n').innerHTML = tasks_ranged[1].name;
			document.getElementById('task2_t').innerHTML = tasks_ranged[1].time;
			document.getElementById('task2_v').innerHTML = tasks_ranged[1].value;
			document.getElementById('task3_n').innerHTML = tasks_ranged[2].name;
			document.getElementById('task3_t').innerHTML = tasks_ranged[2].time;
			document.getElementById('task3_v').innerHTML = tasks_ranged[2].value;
		}

		clear_ranged_tasks();
		fill_ranged_tasks();

		



	}





    // var output = document.getElementById('output'), clear_output_flag=false, buffer_1=0, current_operation='';

    // const break_event = () => {
    //     output.innerHTML='You broke it';
    //     var pause = 1000;
    //     setTimeout(function(){
    //         $('.calculator-body').removeClass('fade_in');
    //         $('.calculator-body').addClass('fade_away');
    //     }, pause);

    //     setTimeout(function(){
    //         $('#reloading').css({'display':'flex'});
    //         $('#reloading').addClass('fade_in_quick');
    //         $('.lds-spinner div').addClass('spinner_run');
    //     }, pause*2);

    //     setTimeout(function(){
    //         $('#reloading').removeClass('fade_in_quick');
    //         $('#reloading').addClass('fade_away_quick');
    //     }, pause*4);
            

    //     setTimeout(function(){
    //         clear_output();
    //         $('.calculator-body').addClass('fade_in');
    //         $('.calculator-body').removeClass('fade_away');
    //     }, pause*4);

    //     setTimeout(function(){
    //         $('#reloading').css({'display':'none'});
    //     }, pause*5);
    // }
    
    // set_output = (value) => {
    //     if(value === 'Infinity' || value.toString() === 'NaN' || value.toString() === '-Infinity'){
    //         break_event();            
    //     }
    //     else if(value === '0'){
    //         output.innerHTML=Number(output.innerHTML+value);
    //         console.log('output set to '+output.innerHTML);
    //     }
    //     else if (value.toString().slice(-1) === '.'){
    //         output.innerHTML=value;
    //         console.log('output set to '+output.innerHTML);
    //     }
    //     else if (value <= 0 && output.innerHTML==='0'){
    //         output.innerHTML=Number(value);
    //         console.log('output set to '+output.innerHTML);
    //     }
    //     else{
    //         output.innerHTML=Number(output.innerHTML.toString()+value.toString());
    //         console.log('output set to '+output.innerHTML);
    //     }
        
    // }
    // get_output = () => {
    //     return Number(output.innerHTML)
    // }
    // clear_output = () => {
    //     output.innerHTML='0';
    //     console.log('output cleared');
    // };
    // set_buffer_1 = (value) => {
    //     buffer_1=Number(value);
    //     console.log('buffer_1 set to '+buffer_1);
    // }
    // get_buffer_1 = () => {
    //     return Number(buffer_1);
    // }
    // clear_buffer = (buffer) => {
    //     buffer=0;
    // };
    // func_clear_all = () => { 
    //     clear_buffer(buffer_1);
    //     clear_output();
    // }

    // output.addEventListener('change', function(){
    //     if(output.innerHTML==='NaN' || output.innerHTML==='Infinity' || output.innerHTML==='-Infinity'){
    //         break_event();
    //     }
    // });

    // document.querySelectorAll('.digit').forEach(digit_button => {
    //     digit_button.addEventListener('click', function(){
    //         var digit = this.innerHTML; 
    //         console.log(digit+' clicked');
    //         if (clear_output_flag==true){
    //             clear_output();
    //             clear_output_flag=false;
    //             set_output(digit);
    //         }
    //         else{
    //             set_output(digit);
    //         }
    //     });
    // });
    // document.querySelectorAll('.operation').forEach(operation_button => {
    //     operation_button.addEventListener('click', function(){
    //         current_operation = this.innerHTML; 
    //         console.log(current_operation+' clicked');
    //         set_buffer_1(get_output());
    //         clear_output_flag=true;
    //     });
    // });

    // dot_clicked = () => { 
    //     console.log('dot clicked');
    //     set_output(get_output()+'.');
    // };

    // equal_clicked = () => {
    //     var second_value=Number(get_output());
    //     clear_output();
    //     switch(current_operation){
    //         case '+':
    //             set_output(Number.parseFloat(get_buffer_1()+second_value).toPrecision(5));
    //             set_buffer_1(get_output());
    //             break;
    //         case '-':
    //             set_output(Number.parseFloat(get_buffer_1()-second_value).toPrecision(5));
    //             set_buffer_1(get_output());
    //             break;
    //         case '*':
    //             set_output(Number.parseFloat(get_buffer_1()*second_value).toPrecision(5));
    //             set_buffer_1(get_output());
    //             break;
    //         case '/': 
    //             set_output(Number.parseFloat(get_buffer_1()/second_value).toPrecision(5));
    //             set_buffer_1(get_output());
    //             break;
    //         default: 
    //             set_output(second_value);
    //             set_buffer_1(second_value);
    //     }
    // }

});    