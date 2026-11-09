
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, AlertTriangle } from "lucide-react";

export default function ImportantContacts() {
  const contacts = [
    {
      name: "Tele MANAS (National)",
      number: "14416",
      description: "24/7 Mental Health Helpline",
      icon: Phone,
      emergency: true
    },
    {
      name: "VOYCE Support",
      contact: "support@voyce.in",
      description: "App support and general inquiries",
      icon: Mail,
      emergency: false
    },
    {
      name: "State Mental Health",
      number: "104",
      description: "Telangana Health Helpline",
      icon: Phone,
      emergency: false
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Text-based crisis support",
      icon: MessageCircle,
      emergency: false
    }
  ];

  return (
    <Card className="bg-card backdrop-blur-sm border-rose-200 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-foreground">
          <AlertTriangle className="h-6 w-6 mr-2 text-rose-600" />
          Important Contacts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className={`p-4 rounded-lg border ${contact.emergency ? 'bg-rose-50 border-rose-200' : 'bg-primary/10 border-border'}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <contact.icon className={`h-5 w-5 mt-1 ${contact.emergency ? 'text-rose-600' : 'text-muted-foreground'}`} />
                <div>
                  <h4 className="font-medium text-foreground">{contact.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                  <p className="text-sm font-mono text-foreground">
                    {contact.number || contact.contact}
                  </p>
                </div>
              </div>
              {contact.number && (
                <Button 
                  asChild 
                  size="sm" 
                  variant={contact.emergency ? "destructive" : "outline"}
                  className="ml-2"
                >
                  <a href={`tel:${contact.number}`}>Call</a>
                </Button>
              )}
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
          <p className="text-sm text-amber-700">
            <strong>Emergency:</strong> If you're in immediate danger, call 108 (Emergency Services) or visit your nearest hospital.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
