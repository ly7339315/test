function myajax(method,url,param,handle,handle2){
                var http = new XMLHttpRequest();
                var baseURL = 'http://134.175.154.93:8099/manager/category/';
                if(method === 'GET'&&param){
                	url += '?'+encodeFormData(param);

                }
                http.open(method,baseURL+url);
                console.log(baseURL+url);
                http.onreadystatechange = function(){
                	if(http.status===200&&http.readyState===4){
                		console.log('访问成功');
                		handle(JSON.parse(http.responseText));

                	}else{
                		handle2(http.responseText);
                	}

                }
                if(method === 'POST'&&param){
                	http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
                	http.send(encodeFormData(param));

                }else{
                http.send();
            }
		}

		function encodeFormData(data){
				if(!data){
					return "";
				}
				var pairs = [];
				for(var name in data){
					if(!data.hasOwnProperty(name)){
						continue;
					}
					if(typeof data[name] == "function"){
						continue;
					}
					var value = data[name].toString();
					name = encodeURIComponent(name.replace("%20","+"));//编码名字
					value = encodeURIComponent(value.replace("%20","+"));//编码值
					pairs.push(name+"="+value);
				}
				return pairs.join('&');
			}