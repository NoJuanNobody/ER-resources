<form action="https://s1713433073.t.eloqua.com/e/f2" id="form36" method="post" name="CC_Brochure_Request">
    <input name="elqFormName" type="hidden" value="CC_Brochure_Request" />
    <input name="elqSiteId" type="hidden" value="1713433073" />
    <input name="elqCustomerGUID" type="hidden" value="" />
    <input name="elqCookieWrite" type="hidden" value="0" />
    <input name="elqCampaignId" type="hidden" />
    <div class="form-group has-feedback col-lg-12 col-md-12 col-sm-12">
        <label for="first">First Name</label>
        <input class="form-control" id="field0" name="first" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;" type="text" value="">
    </div>
  
    <div class="form-group has-feedback col-lg-12 col-md-12 col-sm-12">
        <label for="last">Last Name</label>
        <input class="form-control" id="field1" name="last" type="text" value="">
    </div>


    <div class="form-group has-feedback col-lg-12 col-md-12 col-sm-12">
        <label for="emailAddress">Email Address</label>
        <input class="form-control" id="field2" name="emailAddress" type="text" value="">
    </div>

    <div class="checkbox col-lg-12 col-md-12 col-sm-12">
        <label>
            <input name="singleCheckbox" type="checkbox" value="on"> Send me updates by email.
        </label>
    </div>  

    <!-- Community Code -->

    <input id="field3" name="com" type="hidden" value="<?php echo $commInfo[$commGet]['commcode'] ?>">

    <input id="field13" name="HDYHAU" type="hidden" value="Erickson Website">

 
		<input type="hidden" value="2016 winter campaign" id="field4">

    <!-- Redirect url/Thank You page link -->
    <input id="field14" name="redirect" type="hidden" value="http://lp2.ericksonliving.com/AC_winter_campaign/thankyou.php?from=<?php echo $commInfo[$commGet]['commcode'] ?>">

     <!-- Spam Trap -->
    <div id="formElement16" style="display: none;">
        <label for="Address2">What color is the sky?</label>
        <input id="field16" name="Address2" type="text" value="">
        <label>Just say blue</label>
    </div>

    <input id="field6" name="ILorCC" type="hidden" value="CC" />
    

    <div class="form-group col-lg-12 col-md-12 col-sm-12">
    <!-- Email Response Code -->
        <input id="field9" name="emailResponse" type="hidden" value="<?php echo $commInfo[$commGet]['form36response'] ?>">

    <!-- TimeStamp code for Salesforce Sync -->
    <input id="field21" name="TimeStamp" type="hidden" value="1409672606519" />

    <input id="formElement22" name="sendBrochure" type="hidden" value="1" />
    <input id="field23" name="RecordTypeId" type="hidden" value="012U0000000ZQvw" />
    
    <!-- Submit Button: Note Google UTM tracking onclick. Campaign Name needs to be changed. -->
        <button class="btn btn-primary btn-block btn-lg submit" onclick="ga('send', 'event', 'Button', '<?php echo $commInfo[$commGet]['commcode'] ?>', '<?php echo $commInfo[$commGet]['commcode'] ?> AC_winter_campaign');" type="submit" value="Request my Brochure">Request My Brochure&nbsp;&nbsp;</button>
    </div>
</form>