import './Contact.css'

function Contact() {
  return (
    <div id="Contact" className="Contact">
			<div className="blue-outer">
				<h1>Contact</h1>
				<p>
					Join our mailing list to stay in touch with our newest plans <br/>
					You'll also get a weekly mail about some amazing code arts that were recently made
				</p>
				<form>
					<label for="mail">
						<input type="text" id="mail" name="mail" placeholder="Your Email Address Here"/>
					</label>
          <input type="submit" value="Submit"/>
				</form>
			</div>
    </div>
	) 
}

export default Contact