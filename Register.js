
import React, {Component} from 'react'
class Register extends Component {
    render(){
        return(
			

	<body>
		<h2>Student Registration Form</h2>
				<table align="center" cellpadding = "2">
					<tr>
						<td>Student id</td>
						<td><input type="text" name="Stuid" maxlength="10" placeholder="student id" />
						</td>
					</tr>
					<tr>
						<td>First Name</td>
						<td><input type="text" name="FirstName" maxlength="50" placeholder="First name" />
						</td>
					</tr>
					<tr>
						<td>Last Name</td>
						<td><input type="text" name="LastName" maxlength="50" placeholder="Last name"/>
						</td>
					</tr>
					<tr>
						<td>Father name</td>
						<td><input type="text" name="Fathername" maxlength="50" placeholder="Father name"/></td>
					</tr>
					<tr>
						<td>Mother name</td>
						<td><input type="text" name="Mothername" maxlength="50" placeholder="Mother name"/></td>
					</tr>
					<tr>
						<td>Mobile Number</td>
						<td>
						<input type="text" name="MobileNumber" maxlength="10" placeholder="Mobile number"/>
						</td>
					</tr>
					<tr>
						<td>Aadhar Number</td>
						<td>
						<input type="text" name="Aadharnumber" maxlength="12" placeholder="Aadhar number"/>
						</td>
				
						<td  Colspan="2" align="left">
							<button id="submit" onclick="alert('Your data successfully submitted')">submit</button>
							<button id="Reset">Reset</button>
						</td>
					</tr>				
			</table>
			<span id="result">
            </span>
	
	</body>

			)
		}
	}
	export default Register;