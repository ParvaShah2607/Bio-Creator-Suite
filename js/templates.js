import { labelText } from './localization.js';
const templates = [
    // Template 1: Minimal Zen - Clean & Modern
    {
        name: "Minimal Zen",
        category: "minimal",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; padding: 40px; background: #ffffff;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <div style="font-size: 14px; color: #6366f1; letter-spacing: 3px; margin-bottom: 8px;">MARRIAGE BIODATA</div>
                    <div style="width: 40px; height: 2px; background: linear-gradient(90deg, #6366f1, #ec4899); margin: 0 auto;"></div>
                </div>
                
                <div style="display: flex; gap: 32px; margin-bottom: 32px;">
                    <div style="flex-shrink: 0;">
                        <img src="${data.photo}" alt="Photo" style="width: 140px; height: 170px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    </div>
                    <div style="flex: 1;">
                        <h1 style="font-size: 28px; font-weight: 600; color: #1e293b; margin: 0 0 8px 0;">${data.fullName || 'Your Name'}</h1>
                        <p style="color: #64748b; font-size: 15px; margin: 0 0 16px 0;">${data.occupation || 'Occupation'}</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 14px;">
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Age:</span> ${data.age || '-'} Years</div>
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Height:</span> ${data.height || '-'}</div>
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Religion:</span> ${data.religion || '-'}</div>
                            <div style="color: #64748b;"><span style="color: #1e293b; font-weight: 500;">Caste:</span> ${data.caste || '-'}</div>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div>
                        <h3 style="font-size: 12px; letter-spacing: 2px; color: #6366f1; margin: 0 0 12px 0; text-transform: uppercase;">Personal Details</h3>
                        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; font-size: 13px;">
                            ${createDetailRow('Date of Birth', data.dob)}
                            ${createDetailRow('Complexion', data.complexion)}
                            ${createDetailRow('Mother Tongue', data.motherTongue)}
                            ${createDetailRow('Rashi', data.rashi)}
                            ${createDetailRow('Nakshatra', data.nakshatra)}
                            ${createDetailRow('Education', data.education)}
                            ${createDetailRow('Income', data.income)}
                            ${createDetailRow('Hobbies', data.hobbies)}
                        </div>
                    </div>
                    <div>
                        <h3 style="font-size: 12px; letter-spacing: 2px; color: #6366f1; margin: 0 0 12px 0; text-transform: uppercase;">Family Details</h3>
                        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; font-size: 13px;">
                            ${createDetailRow("Father's Name", data.fatherName)}
                            ${createDetailRow("Father's Occupation", data.fatherOccupation)}
                            ${createDetailRow("Mother's Name", data.motherName)}
                            ${createDetailRow("Mother's Occupation", data.motherOccupation)}
                            ${createDetailRow('Siblings', data.siblings)}
                            ${createDetailRow('Family Type', data.familyType)}
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 24px;">
                    <h3 style="font-size: 12px; letter-spacing: 2px; color: #6366f1; margin: 0 0 12px 0; text-transform: uppercase;">Contact Information</h3>
                    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 12px; padding: 20px; color: white;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px;">
                            <div><strong>Contact:</strong> ${data.contactNumber || '-'}</div>
                            <div><strong>Email:</strong> ${data.email || '-'}</div>
                            <div style="grid-column: span 2;"><strong>Address:</strong> ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 2: Elegant Classic - Traditional with Modern Touch
    {
        name: "Elegant Classic",
        category: "elegant",
        render: (data) => `
            <div style="font-family: 'Playfair Display', Georgia, serif; padding: 40px; background: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%);">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 20px; color: #b45309;">॥ श्री गणेशाय नमः ॥</div>
                    <div style="font-size: 28px; color: #92400e; font-weight: 600; margin: 8px 0;">शुभ विवाह बायोडाटा</div>
                    <div style="width: 100px; height: 3px; background: linear-gradient(90deg, transparent, #b45309, transparent); margin: 0 auto;"></div>
                </div>
                
                <div style="text-align: center; margin: 24px 0;">
                    <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border: 4px solid #b45309; border-radius: 8px; box-shadow: 0 6px 20px rgba(180, 83, 9, 0.2);">
                    <h2 style="font-size: 24px; color: #78350f; margin: 16px 0 4px 0;">${data.fullName || 'Your Name'}</h2>
                    <p style="color: #92400e; font-family: 'Inter', sans-serif; font-size: 14px; margin: 0;">${data.caste || ''}${data.subCaste ? ' | ' + data.subCaste : ''}</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #b45309; font-size: 16px; border-bottom: 2px solid #fcd34d; padding-bottom: 8px; margin: 0 0 16px 0;">व्यक्तिगत विवरण</h3>
                    <table style="width: 100%; font-family: 'Inter', sans-serif; font-size: 13px; border-collapse: collapse;">
                        ${createTableRow('Date of Birth', data.dob, 'Age', data.age ? data.age + ' Years' : '-')}
                        ${createTableRow('Height', data.height, 'Complexion', data.complexion)}
                        ${createTableRow('Religion', data.religion, 'Caste', data.caste)}
                        ${createTableRow('Gotra', data.subCaste, 'Mother Tongue', data.motherTongue)}
                        ${createTableRow('Rashi', data.rashi, 'Nakshatra', data.nakshatra)}
                        ${createTableRow('Education', data.education, 'Occupation', data.occupation)}
                        ${createTableRow('Income', data.income, 'Hobbies', data.hobbies)}
                    </table>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #b45309; font-size: 16px; border-bottom: 2px solid #fcd34d; padding-bottom: 8px; margin: 0 0 16px 0;">पारिवारिक विवरण</h3>
                    <table style="width: 100%; font-family: 'Inter', sans-serif; font-size: 13px; border-collapse: collapse;">
                        ${createTableRow("Father's Name", data.fatherName, 'Occupation', data.fatherOccupation)}
                        ${createTableRow("Mother's Name", data.motherName, 'Occupation', data.motherOccupation)}
                        ${createTableRowFull('Siblings', data.siblings)}
                        ${createTableRowFull('Family Type', data.familyType)}
                        ${data.aboutFamily ? createTableRowFull('About Family', data.aboutFamily) : ''}
                    </table>
                </div>
                
                <div style="background: linear-gradient(135deg, #b45309 0%, #d97706 100%); border-radius: 12px; padding: 20px; color: white;">
                    <h3 style="font-size: 16px; margin: 0 0 12px 0;">संपर्क विवरण</h3>
                    <div style="font-family: 'Inter', sans-serif; font-size: 14px;">
                        <p style="margin: 4px 0;"><strong>Contact Person:</strong> ${data.contactPerson || '-'} | <strong>Phone:</strong> ${data.contactNumber || '-'}</p>
                        <p style="margin: 4px 0;"><strong>Address:</strong> ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 3: Modern Edge - Bold & Contemporary
    {
        name: "Modern Edge",
        category: "modern",
        render: (data) => `
            <div style="font-family: 'Space Grotesk', sans-serif; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); padding: 32px; color: white;">
                    <div style="display: flex; gap: 24px; align-items: center;">
                        <img src="${data.photo}" alt="Photo" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 4px solid rgba(255,255,255,0.3);">
                        <div>
                            <h1 style="font-size: 28px; font-weight: 700; margin: 0;">${data.fullName || 'Your Name'}</h1>
                            <p style="margin: 8px 0 0 0; opacity: 0.9;">${data.occupation || 'Occupation'} ${data.education ? '• ' + data.education : ''}</p>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 32px;">
                    <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
                        ${createTag('📅', data.dob)}
                        ${createTag('📏', data.height)}
                        ${createTag('🙏', data.religion)}
                        ${createTag('🌟', data.rashi)}
                        ${createTag('💼', data.income)}
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: #f8fafc; border-radius: 16px; padding: 20px;">
                            <h3 style="font-size: 14px; color: #6366f1; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px;">Personal Info</h3>
                            <div style="font-size: 14px; color: #475569;">
                                ${createModernRow('Date of Birth', data.dob)}
                                ${createModernRow('Age', data.age ? data.age + ' Years' : '-')}
                                ${createModernRow('Height', data.height)}
                                ${createModernRow('Complexion', data.complexion)}
                                ${createModernRow('Caste', data.caste + (data.subCaste ? ' (' + data.subCaste + ')' : ''))}
                                ${createModernRow('Mother Tongue', data.motherTongue)}
                                ${createModernRow('Hobbies', data.hobbies)}
                            </div>
                        </div>
                        
                        <div style="background: #f8fafc; border-radius: 16px; padding: 20px;">
                            <h3 style="font-size: 14px; color: #ec4899; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px;">Family Info</h3>
                            <div style="font-size: 14px; color: #475569;">
                                ${createModernRow('Father', data.fatherName + (data.fatherOccupation ? ' (' + data.fatherOccupation + ')' : ''))}
                                ${createModernRow('Mother', data.motherName + (data.motherOccupation ? ' (' + data.motherOccupation + ')' : ''))}
                                ${createModernRow('Siblings', data.siblings)}
                                ${createModernRow('Family Type', data.familyType)}
                                ${createModernRow('Family Status', data.familyStatus)}
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px; padding: 20px; color: white;">
                        <h3 style="font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Contact Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                            <div>📞 ${data.contactNumber || '-'}</div>
                            <div>✉️ ${data.email || '-'}</div>
                            <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 4: Royal Traditional - Premium Indian
    {
        name: "Royal Traditional",
        category: "traditional",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%); padding: 0;">
                <div style="background: linear-gradient(135deg, #be123c 0%, #9f1239 100%); padding: 24px; text-align: center; color: white;">
                    <div style="font-size: 18px; font-family: 'Playfair Display', serif;">॥ श्री गणेशाय नमः ॥</div>
                    <h1 style="font-size: 26px; font-weight: 700; margin: 8px 0; font-family: 'Playfair Display', serif;">MARRIAGE BIODATA</h1>
                    <div style="width: 80px; height: 2px; background: rgba(255,255,255,0.5); margin: 0 auto;"></div>
                </div>
                
                <div style="padding: 32px;">
                    <div style="display: flex; gap: 24px; margin-bottom: 24px;">
                        <div style="flex-shrink: 0;">
                            <div style="border: 4px solid #be123c; border-radius: 8px; padding: 4px; background: white;">
                                <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border-radius: 4px;">
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <h2 style="font-size: 24px; color: #9f1239; margin: 0 0 8px 0; font-family: 'Playfair Display', serif;">${data.fullName || 'Your Name'}</h2>
                            <p style="color: #64748b; margin: 0 0 16px 0;">${data.education || '-'} | ${data.occupation || '-'}</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 13px;">
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">DOB:</span> ${data.dob || '-'}
                                </div>
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">Age:</span> ${data.age || '-'} Years
                                </div>
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">Height:</span> ${data.height || '-'}
                                </div>
                                <div style="background: #fff; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #be123c;">
                                    <span style="color: #9f1239; font-weight: 600;">Religion:</span> ${data.religion || '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(159, 18, 57, 0.1);">
                        <h3 style="color: #9f1239; font-size: 15px; border-bottom: 2px solid #fecdd3; padding-bottom: 8px; margin: 0 0 16px 0;">Personal Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                            ${createRedDetailItem('Caste', data.caste + (data.subCaste ? ' / ' + data.subCaste : ''))}
                            ${createRedDetailItem('Mother Tongue', data.motherTongue)}
                            ${createRedDetailItem('Complexion', data.complexion)}
                            ${createRedDetailItem('Rashi', data.rashi)}
                            ${createRedDetailItem('Nakshatra', data.nakshatra)}
                            ${createRedDetailItem('Income', data.income)}
                            ${createRedDetailItem('Hobbies', data.hobbies, true)}
                        </div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(159, 18, 57, 0.1);">
                        <h3 style="color: #9f1239; font-size: 15px; border-bottom: 2px solid #fecdd3; padding-bottom: 8px; margin: 0 0 16px 0;">Family Details</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                            ${createRedDetailItem("Father's Name", data.fatherName)}
                            ${createRedDetailItem("Father's Occupation", data.fatherOccupation)}
                            ${createRedDetailItem("Mother's Name", data.motherName)}
                            ${createRedDetailItem("Mother's Occupation", data.motherOccupation)}
                            ${createRedDetailItem('Siblings', data.siblings, true)}
                            ${createRedDetailItem('Family Type', data.familyType)}
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #be123c 0%, #9f1239 100%); border-radius: 12px; padding: 20px; color: white;">
                        <h3 style="font-size: 15px; margin: 0 0 12px 0;">Contact Details</h3>
                        <div style="font-size: 14px;">
                            <p style="margin: 4px 0;"><strong>Contact Person:</strong> ${data.contactPerson || '-'}</p>
                            <p style="margin: 4px 0;"><strong>Phone:</strong> ${data.contactNumber || '-'} | <strong>Email:</strong> ${data.email || '-'}</p>
                            <p style="margin: 4px 0;"><strong>Address:</strong> ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 5: Glassmorphic - Ultra Modern
    {
        name: "Glassmorphic",
        category: "glass",
        render: (data) => `
            <div style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 40px; min-height: 100%;">
                <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 24px; padding: 32px; border: 1px solid rgba(255,255,255,0.2);">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: 14px; color: rgba(255,255,255,0.9); letter-spacing: 4px; margin-bottom: 8px;">BIODATA</div>
                    </div>
                    
                    <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 32px;">
                        <img src="${data.photo}" alt="Photo" style="width: 120px; height: 120px; object-fit: cover; border-radius: 20px; border: 3px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                        <div style="color: white;">
                            <h1 style="font-size: 28px; font-weight: 700; margin: 0; text-shadow: 0 2px 10px rgba(0,0,0,0.2);">${data.fullName || 'Your Name'}</h1>
                            <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 15px;">${data.occupation || '-'}</p>
                            <div style="display: flex; gap: 16px; margin-top: 12px; font-size: 13px; opacity: 0.85;">
                                <span>🎂 ${data.age || '-'} Years</span>
                                <span>📏 ${data.height || '-'}</span>
                                <span>🙏 ${data.religion || '-'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                        <div style="background: rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; border: 1px solid rgba(255,255,255,0.1);">
                            <h3 style="color: white; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Personal</h3>
                            <div style="font-size: 13px; color: rgba(255,255,255,0.9);">
                                ${createGlassRow('Date of Birth', data.dob)}
                                ${createGlassRow('Caste', data.caste + (data.subCaste ? ' (' + data.subCaste + ')' : ''))}
                                ${createGlassRow('Mother Tongue', data.motherTongue)}
                                ${createGlassRow('Rashi', data.rashi)}
                                ${createGlassRow('Education', data.education)}
                                ${createGlassRow('Income', data.income)}
                            </div>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; border: 1px solid rgba(255,255,255,0.1);">
                            <h3 style="color: white; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Family</h3>
                            <div style="font-size: 13px; color: rgba(255,255,255,0.9);">
                                ${createGlassRow('Father', data.fatherName)}
                                ${createGlassRow('Occupation', data.fatherOccupation)}
                                ${createGlassRow('Mother', data.motherName)}
                                ${createGlassRow('Occupation', data.motherOccupation)}
                                ${createGlassRow('Siblings', data.siblings)}
                                ${createGlassRow('Family Type', data.familyType)}
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.2); border-radius: 16px; padding: 20px; color: white;">
                        <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0; opacity: 0.8;">Contact</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                            <div>📞 ${data.contactNumber || '-'}</div>
                            <div>✉️ ${data.email || '-'}</div>
                            <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 6: Dark Luxe - Premium Dark Mode
    {
        name: "Dark Luxe",
        category: "dark",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); padding: 40px; color: #f1f5f9;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <div style="font-size: 12px; color: #94a3b8; letter-spacing: 4px; margin-bottom: 8px;">MARRIAGE BIODATA</div>
                    <div style="width: 60px; height: 2px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); margin: 0 auto;"></div>
                </div>
                
                <div style="display: flex; gap: 28px; margin-bottom: 32px;">
                    <div style="flex-shrink: 0;">
                        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 3px; border-radius: 16px;">
                            <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border-radius: 14px;">
                        </div>
                    </div>
                    <div>
                        <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 4px 0; background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.fullName || 'Your Name'}</h1>
                        <p style="color: #94a3b8; margin: 0 0 16px 0; font-size: 15px;">${data.occupation || '-'}</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${createDarkTag(data.age + ' Years')}
                            ${createDarkTag(data.height)}
                            ${createDarkTag(data.religion)}
                            ${createDarkTag(data.caste)}
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px;">
                        <h3 style="font-size: 12px; color: #60a5fa; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Personal Details</h3>
                        <div style="font-size: 13px;">
                            ${createDarkRow('Date of Birth', data.dob)}
                            ${createDarkRow('Complexion', data.complexion)}
                            ${createDarkRow('Mother Tongue', data.motherTongue)}
                            ${createDarkRow('Gotra', data.subCaste)}
                            ${createDarkRow('Rashi', data.rashi)}
                            ${createDarkRow('Nakshatra', data.nakshatra)}
                            ${createDarkRow('Education', data.education)}
                            ${createDarkRow('Income', data.income)}
                        </div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px;">
                        <h3 style="font-size: 12px; color: #a78bfa; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.9;">Family Details</h3>
                        <div style="font-size: 13px;">
                            ${createDarkRow('Father', data.fatherName)}
                            ${createDarkRow('Occupation', data.fatherOccupation)}
                            ${createDarkRow('Mother', data.motherName)}
                            ${createDarkRow('Occupation', data.motherOccupation)}
                            ${createDarkRow('Siblings', data.siblings)}
                            ${createDarkRow('Family Type', data.familyType)}
                            ${createDarkRow('Family Status', data.familyStatus)}
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 16px; padding: 20px;">
                    <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0; opacity: 0.9;">Contact Information</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
                        <div>📞 ${data.contactNumber || '-'}</div>
                        <div>✉️ ${data.email || '-'}</div>
                        <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 7: Floral Pink - Feminine & Elegant
    {
        name: "Floral Pink",
        category: "feminine",
        render: (data) => `
            <div style="font-family: 'Playfair Display', serif; background: linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%); padding: 40px;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 18px; color: #be185d;">❀ श्री गणेशाय नमः ❀</div>
                    <h1 style="font-size: 28px; color: #9d174d; margin: 8px 0;">Biodata for Marriage</h1>
                    <div style="width: 80px; height: 2px; background: linear-gradient(90deg, #ec4899, #f472b6); margin: 0 auto;"></div>
                </div>
                
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="display: inline-block; padding: 6px; background: linear-gradient(135deg, #ec4899, #f472b6); border-radius: 50%;">
                        <img src="${data.photo}" alt="Photo" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 4px solid white;">
                    </div>
                    <h2 style="font-size: 24px; color: #831843; margin: 16px 0 4px 0;">${data.fullName || 'Your Name'}</h2>
                    <p style="color: #be185d; font-family: 'Inter', sans-serif; font-size: 14px; margin: 0;">${data.occupation || '-'}</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.7); border-radius: 20px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.1);">
                    <h3 style="color: #be185d; font-size: 16px; margin: 0 0 16px 0; text-align: center;">✿ Personal Details ✿</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-family: 'Inter', sans-serif; font-size: 13px;">
                        ${createPinkDetailItem('Date of Birth', data.dob)}
                        ${createPinkDetailItem('Age', data.age ? data.age + ' Years' : '-')}
                        ${createPinkDetailItem('Height', data.height)}
                        ${createPinkDetailItem('Religion', data.religion)}
                        ${createPinkDetailItem('Caste', data.caste)}
                        ${createPinkDetailItem('Mother Tongue', data.motherTongue)}
                        ${createPinkDetailItem('Education', data.education)}
                        ${createPinkDetailItem('Income', data.income)}
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.7); border-radius: 20px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.1);">
                    <h3 style="color: #be185d; font-size: 16px; margin: 0 0 16px 0; text-align: center;">✿ Family Details ✿</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-family: 'Inter', sans-serif; font-size: 13px;">
                        ${createPinkDetailItem("Father's Name", data.fatherName)}
                        ${createPinkDetailItem('Occupation', data.fatherOccupation)}
                        ${createPinkDetailItem("Mother's Name", data.motherName)}
                        ${createPinkDetailItem('Occupation', data.motherOccupation)}
                        ${createPinkDetailItem('Siblings', data.siblings, true)}
                        ${createPinkDetailItem('Family Type', data.familyType)}
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%); border-radius: 20px; padding: 20px; color: white; text-align: center;">
                    <h3 style="font-size: 16px; margin: 0 0 12px 0;">Contact Details</h3>
                    <div style="font-family: 'Inter', sans-serif; font-size: 14px;">
                        <p style="margin: 4px 0;">📞 ${data.contactNumber || '-'} | ✉️ ${data.email || '-'}</p>
                        <p style="margin: 4px 0;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 8: Green Nature - Fresh & Natural
    {
        name: "Green Nature",
        category: "nature",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%); padding: 40px;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 16px; color: #059669;">🌿 श्री गणेशाय नमः 🌿</div>
                    <h1 style="font-size: 26px; color: #047857; margin: 8px 0;">MARRIAGE BIODATA</h1>
                </div>
                
                <div style="display: flex; gap: 24px; margin-bottom: 24px;">
                    <div style="flex-shrink: 0;">
                        <img src="${data.photo}" alt="Photo" style="width: 130px; height: 160px; object-fit: cover; border-radius: 12px; border: 3px solid #10b981; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.2);">
                    </div>
                    <div>
                        <h2 style="font-size: 24px; color: #047857; margin: 0 0 8px 0;">${data.fullName || 'Your Name'}</h2>
                        <p style="color: #059669; margin: 0 0 12px 0;">${data.occupation || '-'}</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px;">
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>DOB:</strong> ${data.dob || '-'}</div>
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>Age:</strong> ${data.age || '-'} Years</div>
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>Height:</strong> ${data.height || '-'}</div>
                            <div style="background: rgba(255,255,255,0.7); padding: 8px 12px; border-radius: 8px;"><strong>Religion:</strong> ${data.religion || '-'}</div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 16px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #047857; font-size: 15px; border-bottom: 2px solid #a7f3d0; padding-bottom: 8px; margin: 0 0 16px 0;">Personal Details</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                        ${createGreenItem('Caste', data.caste + (data.subCaste ? ' / ' + data.subCaste : ''))}
                        ${createGreenItem('Mother Tongue', data.motherTongue)}
                        ${createGreenItem('Complexion', data.complexion)}
                        ${createGreenItem('Rashi', data.rashi)}
                        ${createGreenItem('Education', data.education)}
                        ${createGreenItem('Income', data.income)}
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.6); border-radius: 16px; padding: 20px; margin-bottom: 16px;">
                    <h3 style="color: #047857; font-size: 15px; border-bottom: 2px solid #a7f3d0; padding-bottom: 8px; margin: 0 0 16px 0;">Family Details</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                        ${createGreenItem("Father's Name", data.fatherName)}
                        ${createGreenItem('Occupation', data.fatherOccupation)}
                        ${createGreenItem("Mother's Name", data.motherName)}
                        ${createGreenItem('Occupation', data.motherOccupation)}
                        ${createGreenItem('Siblings', data.siblings)}
                        ${createGreenItem('Family Type', data.familyType)}
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); border-radius: 16px; padding: 20px; color: white;">
                    <h3 style="font-size: 15px; margin: 0 0 12px 0;">Contact Details</h3>
                    <div style="font-size: 14px;">
                        <p style="margin: 4px 0;">📞 ${data.contactNumber || '-'} | ✉️ ${data.email || '-'}</p>
                        <p style="margin: 4px 0;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    },

    // Template 9: Blue Professional - Corporate Look
    {
        name: "Blue Professional",
        category: "professional",
        render: (data) => `
            <div style="font-family: 'Inter', sans-serif; background: #ffffff; padding: 0;">
                <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 32px; color: white;">
                    <div style="display: flex; gap: 24px; align-items: center;">
                        <img src="${data.photo}" alt="Photo" style="width: 110px; height: 130px; object-fit: cover; border-radius: 8px; border: 3px solid rgba(255,255,255,0.3);">
                        <div>
                            <div style="font-size: 12px; opacity: 0.8; letter-spacing: 2px; margin-bottom: 4px;">MARRIAGE BIODATA</div>
                            <h1 style="font-size: 26px; font-weight: 700; margin: 0 0 8px 0;">${data.fullName || 'Your Name'}</h1>
                            <p style="margin: 0; opacity: 0.9; font-size: 15px;">${data.education || '-'} | ${data.occupation || '-'}</p>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 32px;">
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px;">
                        ${createBlueStatCard('Age', data.age ? data.age + ' Yrs' : '-')}
                        ${createBlueStatCard('Height', data.height || '-')}
                        ${createBlueStatCard('Religion', data.religion || '-')}
                        ${createBlueStatCard('Income', data.income || '-')}
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div>
                            <h3 style="font-size: 14px; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 2px solid #dbeafe; padding-bottom: 8px;">Personal Details</h3>
                            <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                                ${createBlueTableRow('Date of Birth', data.dob)}
                                ${createBlueTableRow('Caste', data.caste + (data.subCaste ? ' (' + data.subCaste + ')' : ''))}
                                ${createBlueTableRow('Mother Tongue', data.motherTongue)}
                                ${createBlueTableRow('Complexion', data.complexion)}
                                ${createBlueTableRow('Rashi', data.rashi)}
                                ${createBlueTableRow('Nakshatra', data.nakshatra)}
                                ${createBlueTableRow('Hobbies', data.hobbies)}
                            </table>
                        </div>
                        <div>
                            <h3 style="font-size: 14px; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0; border-bottom: 2px solid #dbeafe; padding-bottom: 8px;">Family Details</h3>
                            <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                                ${createBlueTableRow("Father's Name", data.fatherName)}
                                ${createBlueTableRow('Occupation', data.fatherOccupation)}
                                ${createBlueTableRow("Mother's Name", data.motherName)}
                                ${createBlueTableRow('Occupation', data.motherOccupation)}
                                ${createBlueTableRow('Siblings', data.siblings)}
                                ${createBlueTableRow('Family Type', data.familyType)}
                                ${createBlueTableRow('Family Status', data.familyStatus)}
                            </table>
                        </div>
                    </div>
                    
                    <div style="margin-top: 24px; background: #f0f9ff; border-radius: 12px; padding: 20px; border: 1px solid #bfdbfe;">
                        <h3 style="font-size: 14px; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Contact Information</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px; color: #1e3a8a;">
                            <div>📞 ${data.contactNumber || '-'}</div>
                            <div>✉️ ${data.email || '-'}</div>
                            <div style="grid-column: span 2;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Template 10: Purple Gradient - Trendy & Cool
    {
        name: "Purple Gradient",
        category: "trendy",
        render: (data) => `
            <div style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%); padding: 40px; color: white;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 11px; letter-spacing: 4px; opacity: 0.8;">MARRIAGE BIODATA</div>
                </div>
                
                <div style="text-align: center; margin-bottom: 32px;">
                    <div style="display: inline-block; padding: 4px; background: rgba(255,255,255,0.2); border-radius: 50%;">
                        <img src="${data.photo}" alt="Photo" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%;">
                    </div>
                    <h1 style="font-size: 28px; font-weight: 700; margin: 16px 0 4px 0;">${data.fullName || 'Your Name'}</h1>
                    <p style="margin: 0; opacity: 0.9; font-size: 15px;">${data.occupation || '-'}</p>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 32px; font-size: 14px;">
                    <div style="text-align: center;"><div style="font-size: 22px; font-weight: 700;">${data.age || '-'}</div><div style="opacity: 0.7; font-size: 12px;">Years</div></div>
                    <div style="width: 1px; background: rgba(255,255,255,0.3);"></div>
                    <div style="text-align: center;"><div style="font-size: 22px; font-weight: 700;">${data.height?.split(' ')[0] || '-'}</div><div style="opacity: 0.7; font-size: 12px;">Height</div></div>
                    <div style="width: 1px; background: rgba(255,255,255,0.3);"></div>
                    <div style="text-align: center;"><div style="font-size: 22px; font-weight: 700;">${data.education?.split(' ')[0] || '-'}</div><div style="opacity: 0.7; font-size: 12px;">Education</div></div>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 24px; margin-bottom: 16px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
                        ${createPurpleRow('Religion', data.religion)}
                        ${createPurpleRow('Caste', data.caste)}
                        ${createPurpleRow('Gotra', data.subCaste)}
                        ${createPurpleRow('Mother Tongue', data.motherTongue)}
                        ${createPurpleRow('Rashi', data.rashi)}
                        ${createPurpleRow('Income', data.income)}
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 24px; margin-bottom: 16px;">
                    <h3 style="font-size: 12px; letter-spacing: 2px; margin: 0 0 16px 0; opacity: 0.8;">FAMILY</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
                        ${createPurpleRow('Father', data.fatherName + (data.fatherOccupation ? ' (' + data.fatherOccupation + ')' : ''))}
                        ${createPurpleRow('Mother', data.motherName + (data.motherOccupation ? ' (' + data.motherOccupation + ')' : ''))}
                        ${createPurpleRow('Siblings', data.siblings)}
                        ${createPurpleRow('Family Type', data.familyType)}
                    </div>
                </div>
                
                <div style="background: rgba(0,0,0,0.2); border-radius: 20px; padding: 20px; text-align: center;">
                    <div style="font-size: 14px;">
                        <p style="margin: 4px 0;">📞 ${data.contactNumber || '-'} | ✉️ ${data.email || '-'}</p>
                        <p style="margin: 4px 0; opacity: 0.9;">📍 ${data.address || '-'}${data.city ? ', ' + data.city : ''}${data.state ? ', ' + data.state : ''}</p>
                    </div>
                </div>
            </div>
        `
    }
];

// ============================================
// Helper Functions for Template Rendering
// ============================================
function createDetailRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e2e8f0;"><span style="color: #64748b;">${labelText(label)}</span><span style="color: #1e293b; font-weight: 500;">${value}</span></div>`;
}

function createTableRow(label1, value1, label2, value2) {
    return `<tr><td style="padding: 6px 8px; color: #78350f; font-weight: 600; width: 25%;">${labelText(label1)}</td><td style="padding: 6px 8px; color: #1e293b; width: 25%;">${value1 || '-'}</td><td style="padding: 6px 8px; color: #78350f; font-weight: 600; width: 25%;">${labelText(label2)}</td><td style="padding: 6px 8px; color: #1e293b; width: 25%;">${value2 || '-'}</td></tr>`;
}

function createTableRowFull(label, value) {
    return `<tr><td style="padding: 6px 8px; color: #78350f; font-weight: 600; width: 25%;">${labelText(label)}</td><td style="padding: 6px 8px; color: #1e293b;" colspan="3">${value || '-'}</td></tr>`;
}

function createModernRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #e2e8f0;"><span style="color: #64748b;">${labelText(label)}</span><span style="color: #1e293b; font-weight: 500;">${value}</span></div>`;
}

function createTag(icon, value) {
    if (!value) return '';
    return `<span style="background: #f1f5f9; padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #475569;">${icon} ${value}</span>`;
}

function createRedDetailItem(label, value, fullWidth = false) {
    return `<div style="background: #fff1f2; padding: 10px 12px; border-radius: 8px; border-left: 3px solid #be123c;${fullWidth ? ' grid-column: span 2;' : ''}"><span style="color: #9f1239; font-weight: 600; display: block; font-size: 11px; margin-bottom: 2px;">${labelText(label)}</span><span style="color: #1e293b;">${value || '-'}</span></div>`;
}

function createGlassRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="opacity: 0.7;">${labelText(label)}</span><span style="font-weight: 500;">${value}</span></div>`;
}

function createDarkTag(value) {
    if (!value) return '';
    return `<span style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; font-size: 12px;">${value}</span>`;
}

function createDarkRow(label, value) {
    if (!value) return '';
    return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><span style="color: #94a3b8;">${labelText(label)}</span><span style="color: #f1f5f9;">${value}</span></div>`;
}

function createPinkDetailItem(label, value, fullWidth = false) {
    return `<div style="background: #fdf2f8; padding: 10px 12px; border-radius: 10px;${fullWidth ? ' grid-column: span 2;' : ''}"><span style="color: #be185d; font-weight: 600; display: block; font-size: 11px; margin-bottom: 2px;">${labelText(label)}</span><span style="color: #1e293b;">${value || '-'}</span></div>`;
}

function createGreenItem(label, value) {
    return `<div style="background: #ecfdf5; padding: 10px 12px; border-radius: 8px; border-left: 3px solid #10b981;"><span style="color: #047857; font-weight: 600; display: block; font-size: 11px; margin-bottom: 2px;">${labelText(label)}</span><span style="color: #1e293b;">${value || '-'}</span></div>`;
}

function createBlueStatCard(label, value) {
    return `<div style="background: #eff6ff; border-radius: 12px; padding: 16px; text-align: center;"><div style="font-size: 18px; font-weight: 700; color: #1e40af;">${value}</div><div style="font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">${labelText(label)}</div></div>`;
}

function createBlueTableRow(label, value) {
    return `<tr><td style="padding: 8px 0; color: #64748b; border-bottom: 1px solid #e2e8f0;">${labelText(label)}</td><td style="padding: 8px 0; color: #1e3a8a; font-weight: 500; border-bottom: 1px solid #e2e8f0; text-align: right;">${value || '-'}</td></tr>`;
}

function createPurpleRow(label, value) {
    if (!value) return '';
    return `<div><span style="opacity: 0.7; font-size: 11px; display: block;">${labelText(label)}</span><span style="font-weight: 500;">${value}</span></div>`;
}


export { templates };
