class MessageDelivery < Delegator
  # param mailer_class InqueryMailer
  # param action contact_complete 
  # *args inquiry
  def initialize(mailer_class, action, *args) #:nodoc:
    @mailer_class, @action, @args = mailer_class, action, args

    # The mail is only processed if we try to call any methods on it.
    # Typical usage will leave it unloaded and call deliver_later.
    @processed_mailer = nil
    @mail_message = nil
  end
end


sample || = "text"
# ↓ 以下と意味は一緒
if sample.nil?
  sample = "text"
end

OR

flg = false

flg ||=  

if flg 
  flg = true
end