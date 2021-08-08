#   class MessageDelivery < Delegator
#   # param mailer_class InqueryMailer
#   # param action contact_complete 
#   # *args inquiry
#   def initialize(mailer_class, action, *args) #:nodoc:
#     @mailer_class, @action, @args = mailer_class, action, args

#     # The mail is only processed if we try to call any methods on it.
#     # Typical usage will leave it unloaded and call deliver_later.
#     @processed_mailer = nil
#     @mail_message = nil
#   end
# end


# sample || = "text"
# # ↓ 以下と意味は一緒
# if sample.nil?
#   sample = "text"
# end

# OR

# flg = false

# flg ||= true 
# # ↓ 同義
# if flg 
#   flg = true
# end


# def self.action_methods
#   @action_methods ||=
#     # All public instance methods of this class, including ancestors
#     public_instance_methods(true).map { |m| m.to_s }.to_set -
#     # Except for public instance methods of Base and its ancestors
#     Base.public_instance_methods(true).map { |m| m.to_s } +
#     # Be sure to include shadowed public instance methods of this class
#     public_instance_methods(false).map { |m| m.to_s } -
#     # And always exclude explicitly hidden actions
#     hidden_actions
# end

class User
  attr_accessor :name, :age  
  def initialize(**param)
    @name = param[:name]
    @age = param[:age]
  end

  def disp_user_info
    putsels try(name)
  end
end

user = User.new(name: "テストユーザー", age: 25)
user.disp_user_info