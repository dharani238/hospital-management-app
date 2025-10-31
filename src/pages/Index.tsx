import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, UserCog, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Activity className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hospital Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your healthcare operations with our comprehensive management solution
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            {user ? (
              <Link to="/dashboard">
                <Button size="lg" className="gap-2">
                  Go to Dashboard <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Patient Management</CardTitle>
              <CardDescription>
                Efficiently manage patient records, medical history, and personal information in one centralized system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Complete patient profiles</li>
                <li>• Medical history tracking</li>
                <li>• Quick search & filters</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-secondary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <UserCog className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Doctor Directory</CardTitle>
              <CardDescription>
                Maintain comprehensive records of medical staff with specializations, contact details, and availability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Doctor profiles</li>
                <li>• Specialization tracking</li>
                <li>• Contact management</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Appointment Scheduling</CardTitle>
              <CardDescription>
                Schedule and manage appointments between patients and doctors with real-time status updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Easy booking system</li>
                <li>• Status tracking</li>
                <li>• Appointment notes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose Our System?</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Secure & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Built with enterprise-grade security to protect sensitive patient data
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-secondary">User Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive interface designed for healthcare professionals
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-accent">Real-time Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Instant synchronization across all devices and users
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Comprehensive Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Generate detailed analytics and insights for better decision making
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
